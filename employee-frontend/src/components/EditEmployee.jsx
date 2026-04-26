import { useEffect } from 'react';
import {useForm} from 'react-hook-form'
import {useLocation,useNavigate} from 'react-router'
import axiosInstance from '../axiosInstance';

function EditEmployee() {
  const{
    register,
    handleSubmit,
    formState:{errors},
    setValue
  }=useForm()
const navigate=useNavigate();
   //get empObj from navigation state
    const {state}=useLocation();
    useEffect(()=>{
      if(state){
        setValue("name", state.name || state.Name);
        setValue("email", state.email);
        setValue("mobile", state.mobile);
        setValue("designation", state.designation);
        setValue("companyName", state.companyName);
      }
    }, []);

    const saveModifiedEmp=async(ModifiedEmp)=>{
      //make http req to save modified emp details
      const res=await axiosInstance.put(`/emp/${state._id}`, ModifiedEmp)
      if(res.status===200){
        alert("employee details modified successfully")
        navigate('/list')
      }
    }

  return (
    <div>
      <h1 className="text-5xl text-center text-gray-600">Edit Employee</h1>
      {/* form */}
      <form className=" max-w-md mx-auto mt-10"  onSubmit={handleSubmit(saveModifiedEmp)}>
        <input
          type="text"
          placeholder="Enter name "
          {...register("name")}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="email"
          placeholder="Enter Email "
          {...register("email")}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
          disabled
        />

        <input
          type="number"
          placeholder="Enter mobile number"
          {...register("mobile")}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter designation"
          {...register("designation")}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter name of the company"
          {...register("companyName")}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />

        <button type="submit" className="text-2xl rounded-2xl bg-gray-600 text-white block mx-auto p-4">
          Save
        </button>
      </form>
    </div>
  )
}

export default EditEmployee