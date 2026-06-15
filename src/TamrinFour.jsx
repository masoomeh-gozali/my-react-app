export default function TamrinFour() { 
    const student = [ 
        {name: "Albert Einstein", age: 55},  
        {name: "jadi mirmirani", age: 49} 
    ]; 
    return ( 
        <ul> 
        {student.map((student, index) => (<li key={index}>{student.name} - {student.age}</li>))}  
        </ul>
    );
} 
//  *************تمرین چهارم : ****************
// نشان دادن 
// object با map 




