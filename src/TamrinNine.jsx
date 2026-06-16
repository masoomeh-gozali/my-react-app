import { useState } from "react";
export default function TamrinNineTodoList() {  
    let [text, setText] = useState("") ; 
    let [todos, setTodos] = useState([]) ; 
    // let [inputValue, setInputValue] = useState(""); 
    const addTodo = () => { 
        if (text.trim() === "")return ; 
        setTodos([...todos, text]); 
        setText(""); 
    }; 


        

     return ( 

        <div className=" p-5 bg-blue-200 rounded-lg w-200 h-30 justify-center items-center flex-row  m-35 flex"> 
        <div> 
            <input type="text" value={text} onChange={(event) => setText(event.target.value) 
            }  className="w-100 h-10 bg-pink-200 px-2 rounded-lg hover:bg-pink-300 "  placeholder="...برنامه های روزانه خود را بنویسید  "/> 

            <button onClick={addTodo} className="bg-green-300 py-2 ml-2 rounded-lg hover:bg-green-400"> ADD TODO </button>  
            </div> 
            <div> 
            <ul className="bg-blue-200"> 

            {todos.map((todo, index) => (<li key={index} 
            className="bg-gray-200 p-2 rounded-lg "> {todo} </li>))  } 

            </ul> 

        </div>
        </div> 
     ); 
} 

// تمرین نهم : 
// اضافه کردن Todo 
// این تمرین رو چند بار از اول نوشتم تا خوب یادش بگیرم 
// ترکیب چیزهایی هست که توی تمرین های قبلی بودن  


