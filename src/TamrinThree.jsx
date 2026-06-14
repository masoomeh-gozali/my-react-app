export default function TamrinThree() { 
    let Students = ["elena", "Takara", "Anahita", "Albert Einstein", "tesla"]; 
    return ( 
        <ul> 
            {Students.map( (student, index) => (<li key = {index}> {student} </li> ))} 

        </ul>

        
    )
} 
// تمرین سوم : ارایه زیر را نمایش بده 
// خروجی: به شکل ستونی بود و متوجه شدم باید از  map , li استفاده کنم 