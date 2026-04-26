import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router";
import axiosInstance from "../axiosInstance";
import {counterContextObj} from '../contexts/ContextProvider'
import {useContext} from 'react'

function CreateEmp() {
  const {counter, changeCounter} = useContext(counterContextObj);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //form submit
 const onFormSubmit = async (newEmpObj) => {
  try {
    setLoading(true);
    setError("");

    const res = await axiosInstance.post("/emp", newEmpObj);
    if (res.status === 201) {
      alert("Employee Created Successfully");
      navigate("/list");
    }

  } catch (err) {
    console.log("err in catch", err);

    if (err.response) {
      setError(err.response.data.message);
    } else {
      setError("Server error");
    }

  } finally {
    setLoading(false);
  }
};

  return (
   
    <div>
       <div>
      
      <h1 classname="text-2xl font-bold">Counter: {counter}</h1>
      <button onClick={changeCounter} className="bg-blue-500 text-white px-4 py-2 rounded">
        change 
      </button>
    </div>
      
      <h1 className="text-5xl text-center text-gray-600">Create New Employee</h1>
      {/* form */}
      <form className=" max-w-md mx-auto mt-10" onSubmit={handleSubmit(onFormSubmit)}>
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

        {error && <p className="text-red-500 text-center mb-4 text-xl">{error}</p>}

        <button type="submit" className="text-2xl rounded-2xl bg-gray-600 text-white block mx-auto p-4">
          Add Emp
        </button>
      </form>
    </div>
  );
}

export default CreateEmp;