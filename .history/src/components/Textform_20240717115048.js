import React,{ useState } from "react";



export default function Textform(props) {
    const handleUpclick = ()=>{
        console.log("uppercasenwas clicked");
        setText("you have clicked on handleupclick")
    }
    const handleOnchange= ()=>{
        console.log("handle onchange");
    }
    const [text, setText] = useState("ENTER TEXT HERE");
  return (
    <div>
        <h1>{props.heading}</h1>
      <div class="mb-3">
      <textarea class="form-control" value={text} onChange={handleOnchange} id="mybox" rows="8"></textarea>
     </div>
     <button className="btn btn-primary" onclick={handleUpclick}>Convert to Uppercase</button>
</div>
  )
}
