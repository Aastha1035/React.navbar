import React from 'react'

export default function Alert(props) {
  return (
      props.alert &&<div class="alert alert-success" 
      className={`alert alert-${props.alert.type}`}
      role="alert">
        <strong>{props.alert.type}</strong>:{props.alert.msg}
        <h4 class="alert-heading">Well done!</h4>
        <p>Aww yeah, you successfully read this 
        important alert message.</p>
        <hr/>
        <p class="mb-0">Whenever you need to, be sure to 
        use margin utilities to keep things nice and tidy.</p>
    </div>
  )
}
