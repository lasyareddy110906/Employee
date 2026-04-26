import { useState, useEffect } from "react";
import {useNavigate} from 'react-router'
import axiosInstance from '../axiosInstance';

function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const navigate=useNavigate()
  const gotoEmployee=(empObj)=>{
    //navigate to selected employee 
    navigate('/employee',{state:empObj});
  }
  const gotoeditEmployee=(empObj)=>{
    navigate('/edit',{state:empObj});
  }
  const deleteEmployee=async (id)=>{
    //make http req to delete employee
    let res=await axiosInstance.delete(`/emp/${id}`)
    if(res.status===200){
      alert("employee deleted successfully")
      //update the list of emps in UI      
      getEmps();
    }
  }
  async function getEmps() {
      let res = await axiosInstance.get("/emp");
      
      if (res.status === 200) {
        let resObj = await res.data;

        
        setEmps(resObj.employees);
      }
    }
  useEffect(() => {
    

    getEmps();
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center">List of Employees</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 rounded-2xl">
        {emps.map((empObj) => (
          <div key={empObj._id} className="bg-white p-5 rounded-2xl ml-3 mt-3">
            <p>{empObj.email}</p>
            <p>{empObj.name}</p>
            <div className="flex justify-around">
              <button onClick={()=>{gotoEmployee(empObj)}} className="bg-blue-200 rounded-2xl p-2 ">View</button>
              <button onClick={()=>{gotoeditEmployee(empObj)}} className="bg-blue-200 rounded-2xl p-2">Edit</button>
              <button onClick={()=>{deleteEmployee(empObj._id)}} className="bg-blue-200 rounded-2xl p-2">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;