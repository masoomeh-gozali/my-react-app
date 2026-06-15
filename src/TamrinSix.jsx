import { useState } from "react";

export default function TamrinSixCount() { 
    let [count, setCount] = useState(0) 
    return ( 
        <div 
        className="bg-green-200 rounded-full items-center flex justify-center w-70 h-77 "> 
        <h1 className=" absolute top-0 right-0 p-4 text-black-500 font-bold text-3xl"> : COUNTER MACHINE </h1> 
        <button onClick={() => setCount(count + 1)} className="bg-blue-300  rounded-full w-50 h-15" >  count <br/> </button> 
        <br/>  
        <br/> 
        <div> 
        <h2> {count} </h2> 
         </div>
        </div>

    ) } 
