import { uniqueId } from "lodash";
import { useState } from "react";
export default function TamrinNineTodoList() {  
    let [text, setText] = useState("") ; 
    let [todos, setTodos] = useState([]) ; 
    // let [inputValue, setInputValue] = useState(""); 
    const addTodo = () => { 
        if (text.trim() === "")return ; 
        setTodos([...todos, { id:uniqueId(), text } ]); 
        setText(""); 
    }; 


        

     return ( 

        <div className=" p-5 bg-blue-200 rounded-lg w-200 h-50 justify-center items-center flex-row  m-35 flex"> 
        <div> 
            {/* یوزاستیت رو برای این ساختیم که چون باید یه جایی رو برای ذخیره چیزی که کاربر تایپ میکنه داشته باشیم
             و بعد توی اینپوت از انچنج استفاده میکنیم و بهش میگیم هروقت کاربر چیزی تایپ کرد مقدار جدید رو بگیر و داخل استیت ذخیره کن  */}
            <input type="text" value={text} onChange={(event) => setText(event.target.value) 
            }  className="w-100 h-10 bg-pink-200 px-2 rounded-lg hover:bg-pink-300 "  placeholder="...برنامه های روزانه خود را بنویسید  "/> 

            <button onClick={addTodo} className="bg-green-300 py-2 ml-2 rounded-lg hover:bg-green-400"> ADD TODO </button>  
            </div> 
            <div> 
            <ul className="bg-blue-200"> 

            {todos.map((todo) => (<li key={todo.id} 
            className="bg-gray-200 p-2 rounded-lg  m-5"> {todo.text}  
            <button onClick={() => setTodos(todos.filter(t => t.id !== todo.id))} className="bg-yellow-200 py-2 ml-2 rounded-lg hover:bg-yellow-300" > Remove </button>
            </li>))}  
            </ul> 

        </div>
        </div> 
     ); 
} 



// تمرین نهم : 
// اضافه کردن Todo 
// این تمرین رو چند بار از اول نوشتم تا خوب یادش بگیرم 
// ترکیب چیزهایی هست که توی تمرین های قبلی بودن  


