// تمرین اول: یک کامپوننت به اسم استیودنت بساز - *********

// از App این اطلاعات رو بگیر {firstName, age} **************** 
export default function App() {
  return ( 
    <> 
    <Student firstName = "susan"  age = "777"/> 
    </> 
  ); 
} 
function Student(props) { 
  return ( 
    <> 
    <h5> {props.firstName} - {props.age} years old </h5> 
    </>

  ); 
} 















