import React,{ useState } from "react";



export default function Textform(props) {
    const handleUpclick = ()=>{
        console.log("uppercase was clicked" + text);
        setText("you have clicked on handleupclick")
    }
    const handleOnchange= (event)=>{
        console.log("handle onchange");
        setText(event.target.value)
    }
    const [text, setText] = useState("ENTER Text HERE");
  return (
    <div>
        <h1>{props.heading}</h1>
      <div class="mb-3">
      <textarea class="form-control" value={text} onChange={handleOnchange} id="mybox" rows="8"></textarea>
     </div>
     <button className="btn btn-primary" onclick={handleUpclick}>Convert  Uppercase</button>
</div>
  )
}
