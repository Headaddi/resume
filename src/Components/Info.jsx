import React from 'react'

function Info(props) {
  return (
    <div className='info'>
        <h2>{props.heading}</h2>
        <hr />
        <p><small>{props.sub}</small></p>
    </div>
  )
}

export default Info