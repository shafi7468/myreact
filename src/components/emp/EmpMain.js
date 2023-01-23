import React from "react";
import EmpEntry from "./EmpEntry";
import employee from "./Emp.json";
import { useState } from "react";
import EmpView from "./EmpView";

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
  

  return (
    <>
      <EmpEntry addEmp={addEmp}></EmpEntry>
      <EmpView empData={empData} deleteData={deleteData} updateData={updateData}/>
    </>
  );
}
