
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react';


function App() {
const [mode, setmode] = useState('dark');
const [alert, setAlert]=useState(null);

const showAlert=(message,type)=>{
  setAlert({
    msg: message,
    type: type
  })
}

const toggleMode=()=>{
  if(mode==='light'){
    setmode('dark');
    document.body.style.backgroundColor='grey';
    showAlert("DarkMode has been Enabled","success");
  }
 else{
    setmode('light');
    document.body.style.backgroundColor='white';
    showAlert("LightMode has been Enabled","success");
  }


}
  return (

    <>
    <Navbar title="Arpit Website" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm heading="Enter the text analyse below"/>
    </div>
    </>
  );
}

export default App;
