//import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";

function App() 
{
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null);
  const showAlert= (message,type)=>
  {
    setAlert({
      msg: message,
      type:type
    })
    //to disable alert after 2 sec
    // setTimeout(() => {
    //   setAlert(null);
    // }, 1500);
  }
  const toggleMode=()=>
  {
      if(mode==='light')
      {
          setMode("dark");
          document.body.style.backgroundColor='#21272d';
          showAlert("Dark mode has been enabled", "success");
          document.title="TextUtils-Dark";
      }
      else
      {
          setMode("light");
          document.body.style.backgroundColor='white';
          showAlert("Light mode has been enabled", "success");
          document.title="TextUtils-Light";
      }  
  }
  return (
<>

    <Navbar title="TextUtils"  aboutText="About" mode={mode} toggleMode={toggleMode} />
    <Alert  alert={alert}/>
    <div className="container my-3" >
      <TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode}/>
              
    </div>    
  
</>   
  );
}

export default App;
