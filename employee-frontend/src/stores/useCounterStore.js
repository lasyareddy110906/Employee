import {create} from 'zustand'

//create a store using zustand and export it to be used in other components
export const useCounterStore = create((set)=>{
    return {
        //state
        newCounter:0,
        newCounter1:0,
        //add user state(name,age,email) and change name,email,age
        user:{name:"John",age:"101",email:"john.doe@gmail.com"},
        changeEmail:()=>set({...user,email:"john@gmail.com"}),
        changeName:()=>set({...user,name:"john@",age:"102"}),

        //change the state using the functions below
        incrementCounter:()=>set((state)=>({newCounter:state.newCounter+1})),
        incrementCounter1:()=>set((state)=>({newCounter1:state.newCounter1+1})),
        decrementCounter:()=>set((state)=>({newCounter:state.newCounter-1})),
        reset:()=>set({newCounter:0}),
        changeCounter:()=>set({newCounter:500}),
        decrementCounter1:()=>set((state)=>({newCounter1:state.newCounter1-20}))
    }
})


