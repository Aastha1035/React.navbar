
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
   < Navbar title="TextUtils"/>
   <div className="container my-3">
   <Textform heading="Enter the text to analyse"/>
   {/*<About/>*/}
   </div>

  </>
  );
}

export default App;
