import { useState } from "react"; 
import { nanoid } from "nanoid";
import { FaBook } from "react-icons/fa"; 
import { GiStarFormation } from "react-icons/gi";
import { WiStars } from "react-icons/wi"; 
import { PiShootingStarDuotone } from "react-icons/pi"; 
import { MdDone } from "react-icons/md"; 
import { SiCoffeescript } from "react-icons/si"; 
import { TbSchool } from "react-icons/tb";


export default function TodoListProject() { 
    let [todos, setTodo] = useState([{ 
    title: "Study", 
    status: true, 
    id: nanoid() 
    }, 
    { 
    title: "Go to gym", 
    status: true, 
    id: nanoid() 
    }]); 
    let [inputText, setInputText] = useState(""); 

    let addTodo = () => {  if(inputText.trim() === "") return; 
    setTodo([...todos, { title: inputText, status:false, id: nanoid()} 
    ]); 
    setInputText(""); 
    }; 
    let deleteTodo =(id) =>  { setTodo(todos.filter(todo => todo.id !== id)); }; 
        // تابع تکمیل شدن تسک : 
    let toggleTodo= (id) => { setTodo(
        todos.map((todo) => todo.id === id 
    ?{...todo, status: !todo.status}       //یعنی هرچی بود برعکس کن 
    : todo )
    ) ; }; 
    let keyDownHandler = (event) => { if (event.key === "Enter"){ 
        addTodo(); 
    }  }; 
    // شمارنده ها : 
    let complatedTodos = todos.filter((todo) => todo.status).length;    //تودو های انجام شده رو بشمار  
    return ( 

        <div className="relative p-6  bg-[#EAF4FF] rounded-xl w-[700px] min-h-[500px] mx-auto mt-20 shadow-2xl"> 
 
            {/* یوزاستیت رو برای این ساختیم که چون باید یه جایی رو برای ذخیره چیزی که کاربر تایپ میکنه داشته باشیم
             و بعد توی اینپوت از انچنج استفاده میکنیم و بهش میگیم هروقت کاربر چیزی تایپ کرد مقدار جدید رو بگیر و داخل استیت ذخیره کن  */}
            <h1 className="text-blue font-bold mb-6 text-4xl font-mono"> <b>  Todo List </b> </h1> 
            <PiShootingStarDuotone className="  top-4 left-10  text-3xl "/> 
            

            <FaBook className="absolute top-4 right-4 text-2xl text-[#60A5FA] rotate-12"/> 
            <SiCoffeescript className="absolute top-3 right-14 text-2xl text-[#60A5FA] rotate-12" /> 
            {/* <TbSchool className="absolute top-2 right-23 text-2xl text-[#60A5FA] rotate-12"/> */}
            
            <div className="flex items-center gap-3 mb-5"> 
            <input type="text" value={inputText} onKeyDown= {keyDownHandler}  onChange={(event) => setInputText(event.target.value) 
            }  className="  bg-gray-200 w-full h-10  px-2 rounded-lg hover: flex-1 border hover:border hover:border-gray-700 "  placeholder="...برنامه های روزانه خود را بنویسید  "/> 

            <button onClick={addTodo} className="bg-[#93C5FD] py-2 px-4 rounded-lg hover:bg-[#7DD3FC] "> Add Todo </button>  
 
            </div> 

            <div> 
            <div className="flex justify-between items-center mb-6">
                <button
          onClick={() => setTodo([])}
          className="bg-[#F87171] px-5 py-3  rounded-xl hover:bg-[#FF5C5C] transition"
        >
          🗑️ Clear All
        </button>
            <p className=" font-medium">  
           [ Completed: {complatedTodos} / {todos.length} ] 
        </p> 
        </div>
            <ul className="bg-[#EAF4FF]  space-y-3"> 

            {todos.map((todo) => (<li key={todo.id} 
            className="bg-gray-200 p-3 rounded-lg  flex justify-between items-center border-bg-gray-200 shadow-xl "> {todo.title}  
            <div className="flex items-center gap-3"> 
            <button onClick={() => deleteTodo(todo.id)} className="bg-[#F87171] py-2 ml-2 rounded-lg hover:bg-[#FF5C5C] transition " >  ❌ Remove</button> 


            <button onClick={() => toggleTodo(todo.id)} className="bg-[#A8F1C0]  py-2 ml-2 rounded-lg  hover:bg-[#9BE9B3] " > {todo.status?  "↩️ Undo" : " ✅ Done" } </button> 
            </div> 
            </li>  
        ))}  

            </ul> 
            {/* <GiStarFormation />  */}
             
             


        </div>
        </div> 
     ); 
}  