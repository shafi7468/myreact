import React from "react";
import EmpEntry from "./EmpEntry";
import employee from "./Emp.json";
import { useState } from "react";
import EmpView from "./EmpView";
import ReactPaginate from "./ReactPaginate";
import SearchEmp from "./SerachEmp";

export default function EmpMain() {
  const [empData, setEmployee] = useState(employee);


  const addEmp = (obj) => {
    let tempArray = [...empData, obj];
       setEmployee(tempArray);
    
  };
  const deleteData=(empName)=>{
   let tempData= empData.filter((e)=>{
         return  e.name !== empName
        })
    setEmployee(tempData);
  }


  const updateData=(empName,ageNew,sal)=>{
    const tempData= empData.map(p =>
    p.name === empName ? { ...p, age:ageNew,sal:sal} : p     
 
  )
  

  setEmployee(tempData);
}

const searchEmp=(obj)=>{
  let tempArray = [...obj];
       setEmployee(tempArray);
}

  

  return (
    <>
      <EmpEntry addEmp={addEmp}></EmpEntry>
      {/* <SearchEmp empData={empData} /> */}
      {/* <EmpView empData={empData} deleteData={deleteData} updateData={updateData}/> */}
      <ReactPaginate empData={empData} deleteData={deleteData} updateData={updateData} searchEmp={searchEmp} itemsPerPage={4}/>
    </>
  );
}
