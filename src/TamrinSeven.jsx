import { useState } from "react";

export default function TamrinSevenIsLogin() { 
    let [isLogin, setIsLogin] =useState(false); 
    return ( 
        <div className="bg-red-200 r items-center flex justify-center w-200 h-77 text-center "> 
            {isLogin? <h2> Welcome </h2> :  <h2>Sign in </h2>}  
            <br/> 
            <button onClick={() => setIsLogin(!isLogin) }  className=" bg-purple-200 p-3 m-3 rounded-lg hover:bg-purple-300"> Change </button>
        </div>
    ); 
}
// تمرین هفتم : 
// نمایش شرطی 
// اگر کاربر لاگین بود خوش امدی وگرنه وارد شو نمایش بده 
// از useState , Boolean استفاده کردم 
// اول همینشکلی کد زدم بعد گفتم بهش دکمه و چند استایل css هم اضافه کنم 
// اخر سر میخواستم به یه بازی تبدیلش کنم که گفتم زیاد وقت تلف نکنم سر یه تمربن شاید اینطوری بهتر باشه 

