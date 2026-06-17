import { useState } from "react";

export default function TamrinBishtar() { 
    let [text, setText] = useState("");  
    let [todos, setTodos] = useState([]);  
    const addTodo = () => { 
        if(text.trim() === "") return;  
        setTodos([...todos, text]) ; 
        setText(""); 
    }; 



    return ( 
        <div> 
            <p> {text} </p>
            <div> 
            <input  className="w-40 h-10 border" value={text} onChange={ (event) => setText(event.target.value)}/> 
            <button onClick={addTodo}> ADD </button>  
            </div> 
            <ul> 
                {todos.map((todo, index) => ( <li key={index}> {todo} </li>) ) } 
            </ul>
        </div>
    ); 
} 
