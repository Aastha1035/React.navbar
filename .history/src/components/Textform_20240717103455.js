import React from 'react'

export default function Textform(props) {
  return (
    <div>
        <h1>{props.heading}</h1>
      <div class="mb-3">
      <label for="mybox" class="form-label">Email address</label>
      <textarea class="form-control" id="mybox" rows="3"></textarea>
     </div>
</div>
  )
}
