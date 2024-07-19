import React,{ useState } from "react";
export default function Textform(props) {
    const handleUpclick = ()=>{
        //console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoclick= ()=>{
        //console.log("handle onchange");
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnchange= (event)=>{
        //console.log("handle onchange");
        setText(event.target.value)
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.Selected();
        navigator.clipboard.writeText(text.value);
    }
   
    const [text, setText] = useState(" ");
  return (
    <>
    <div className="container" style={{backgroundColor: props.mode === 'dark'?'white':'#0042743'}} >
       <h1>{props.heading}</h1>
       <div className="mb-3">
       <textarea className="form-control" 
       value={text} onChange={handleOnchange} style={{backgroundColor: props.mode === 'dark'?'grey':'white' ,
       Color: props.mode === 'dark'?'grey':'#042743'}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onclick={handleUpclick}>Convert to  Uppercase</button>
    <button className="btn btn-primary mx-3" onclick={handleLoclick}>Convert to  Lowercase</button>
    <button className="btn btn-primary mx-3" onclick={handleCopy}>copy text</button>
    </div>
    <div className="container" style={{Color: props.mode === 'dark'?'grey':'#042743'}}>
        <h1>your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.08 * text.split(" ").length} Minutes read</p>
        <h2>preview</h2>
        <p>{text}</p>
    </div>

</>


  )
}
