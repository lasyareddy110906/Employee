import {useLocation} from 'react-router'

function Employee() {
  const {state}=useLocation();
  console.log(state)
  return (
    <div className='p-16 text-center shadow-blue-950 text-3xl'>
      <p>{state.name}</p>
      <p>{state.email}</p>
      <p>{state.mobile}</p>
      <p>{state.designation}</p>
      <p>{state.companyName}</p>
    </div>
  )
}

export default Employee