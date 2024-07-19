import React,{ useState } from "react";



export default function Textform(props) {
    const handleUpclick = ()=>{
        //console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnchange= (event)=>{
        //console.log("handle onchange");
        setText(event.target.value)
    }
    const [text, setText] = useState("enter text here");
  return (
    <>
    <div className="container">
       <h1>{props.heading}</h1>
       <div className="mb-3">
       <textarea className="form-control" value={text} onChange={handleOnchange} id="mybox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary" onclick={handleUpclick}>Convert to  Uppercase</button>
    <button className="btn btn-primary" onclick={handleLoclick}>Convert to  Lowercase</button>
    </div>
    <div className="container">
        <h1>your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.08 * text.split(" ").length} Minutes read</p>
        <h2>preview</h2>
        <p>{text}</p>
    </div>

</>


  )
}
