import React,{ useState } from "react";



export default function Textform(props) {
    const [text, setIndex] = useState("ENTER TEXT HERE");
  return (
    <div>
        <h1>{props.heading}</h1>
      <div class="mb-3">
      <textarea class="form-control" value={text} id="mybox" rows="8"></textarea>
     </div>
     <button className="btn btn-primary">Convert to Uppercase</button>
</div>
  )
}
