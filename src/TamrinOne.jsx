export default function TamrinOne() { 
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