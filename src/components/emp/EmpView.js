import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React from 'react'
import { useState } from 'react';
import swal from 'sweetalert'


export default function EmpView(props) {
    const[name,setName]=useState('');
    const[age,setAge]=useState('');
    const[sal,setSal]=useState('');

    const[flag,setFlag]=useState(true);

    const changeEventHandler=(e)=>{
        if(e.target.name === "eName"){
        setName(e.target.value);
        }
        else if(e.target.name==="eAge"){
            setAge(e.target.value);
        }
        else{
            setSal(e.target.value);
        }
    }

    const setData=(name,age,sal)=>{
        setName(name);
        setAge(age);
        setSal(sal);
    }

  return (
    <>
    <div class="col-6 row m-5">
      <table className="table table-bordered table-striped col-6">
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Salary</td>
          </tr>
        </thead>

        <tbody>
          {props.empData.map((emp, index) => {
            return (
              <>
                <tr key={index}>
                  <td>{emp.name}</td>
                  <td>{emp.age}</td>
                  <td>{emp.sal}</td>
                <td style={{textAlign:"center"}}><button className='btn btn-success m-2' onClick={ ()=>                   
                    {
                        
                        swal({
                            title: "Are you sure?",
                            text: "Once deleted, you will not be able to recover this imaginary file!",
                            icon: "warning",
                            buttons: true,
                            dangerMode: true,
                          })
                          .then((willDelete) => {
                            if (willDelete) {                         
                                props.deleteData(emp.name)       
                              swal("Employee " + name + " has been deleted!", {
                                icon: "success",
                              });
                            } else {
                              swal("Your imaginary file is safe!");
                            }
                          });
                    }
                    
                    }
                    >Delete</button>
                    <button type="button" className="btn btn-primary" 
                    onClick={
                        ()=>{setData(emp.name,emp.age,emp.sal)
                        setFlag(flag);}
                    } data-bs-toggle="modal" data-bs-target="#exampleModal">View</button>
                    </td>
                    
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      </div>
      
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Update Employee</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      Name<input type="text" className='form-control' onChange={changeEventHandler} name="eName" value={name}></input>
    Age<input type="text" className='form-control' onChange={changeEventHandler} name="eAge" value={age}></input>
    Sal<input type="text" className='form-control' onChange={changeEventHandler} name="eSal" value={sal}></input>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss={flag?"modal":null} onClick={()=>{            
            props.updateData(name,age,sal)
              swal({
                title: "Success!",
                text: "Data updated for employee " + name,
                icon: "success",
              })
              this.close();
              
            }}>Update</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
