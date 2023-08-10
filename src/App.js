import React, {useState} from 'react';//imrc
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";//package for react router
function App() {
  const [mode,setMode]= useState('light');//Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);//shortcut:usestatsnippet
  const showAlert = (type, message)=>{
    setAlert({
    })
  }
  const toggleMode=()=>{
    if(mode==='light')
    {
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert("Dark mode has been enabled","success");
    document.title='TextUtils-Darkmode';
    }
    else
    {
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled","success");
    document.title='TextUtils-Lightmode';
    }
  }
  return (
    <>
      <BrowserRouter> 
      <Navbar title="Textutils"  aboutText="About Textutils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes> 
      {/* mention the path and element as same as in other files  */}
      <Route path="/about" element={<About  />} />
      </Routes>
      <Routes>
      <Route path="/Home" element={
      <TextFrom  showAlert={alert} heading="Enter the text to analyze below" mode={mode} />
      }
      />
      </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;