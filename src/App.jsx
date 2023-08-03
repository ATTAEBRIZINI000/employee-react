import Employee from "./components/employee";
import './App.css'
import {useState} from "react";
function App() {
  const [role , setRole] = useState("dev");
   

  const ShowEmployees =true ;
  return (

    <div className = "App">
        
       
        {ShowEmployees?
     <>
     <input type = "text" onChange = {(e) => {
        console.log(e.target.value);
        setRole(e.target.value);


     }}/>
      <Employee name="Caleb" role = "WebDev"/>
      <Employee name = "Suzan" role = {role}/>
      <Employee name = "Attae"/>
  
      </>
      :
      <p>You can not see the employees</p>
      }
    </div>
  )
}

export default App
