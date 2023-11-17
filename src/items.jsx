import React from 'react'

const items = (props) => {
  return (
    <div>
        <div className='box'>
            
            <span>{props.id + 1}</span>
            <span>{props.data}</span>
            <button onClick={() => {props.onSelect(props.id)}}>Delete</button>
                        
        </div>
        <br />        
    </div>
  )
}

export default items