import { useState } from "react"

export default function TamrinEightRemove() { 
    let [names, setNames] = useState(["Einstein", "Tesla", "Jadi"]) ;  
    let deleteNames = (entekhabName) => setNames(names.filter((name) => name !== entekhabName)) 

    
    return(  
        <div className="bg-purple-400">  
        {names.map((name, index) => ( <button key={index}  onClick={ () => deleteNames(name)}  className="bg-pink-200 w-20 h-10 p-4 m-3 text-center rounded-lg hover:bg-pink-400 font-bold flex items-center justify-center italic"> {name} </button>))} 

        </div>
    ); 
} 
تمرین هشتم : 
دکمه حذف ایتم 
لیست نام هارا نمایش بده و هر ایتم دکمه حذف داشته باشد 
اصل کار این تمرین استفاده از متد filter بود  