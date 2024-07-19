


import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  const [mode, setMode] = useState();
  return (
    <>
   < Navbar title="TextUtils" mode={mode} />
   <div className="container my-3">
   <Textform heading="Enter the text to analyse"/>
   </div>
  </>
  );
}

export default App;
