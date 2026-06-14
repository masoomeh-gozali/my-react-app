// import Start from "./Start"; 
// function App() { 
//   return <Start/>; 
// } 
// export default App;  
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















