
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
   < Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
   <Alert/>
   <div className="container my-3">
   <Textform heading="Enter the text to analyse"/>
   </div>
  </>
  );
}

export default App;
