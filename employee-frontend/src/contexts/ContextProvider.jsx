import {createContext,useState} from 'react'


//create context provider object here and export it to be used in other components
export const counterContextObj = createContext()


function ContextProvider({children}) {
    //state
    const [counter, setCounter] = useState(10);
    const [counter1, setCounter1] = useState(10);

    //functions to change the state
    const changeCounter=()=>{
        setCounter(counter+1);
    }
    const changeCounter1=()=>{
        setCounter1(counter1+1);
    }
  return (
    <counterContextObj.Provider value={{ counter, changeCounter, counter1, changeCounter1 }}> 
    {children}
    </counterContextObj.Provider>
  )
}

export default ContextProvider