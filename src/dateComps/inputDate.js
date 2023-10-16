import React, { useRef } from 'react'

function InputDate(props) {
    let deadRef = useRef();
  return (
    <div className='col-lg-4 d-flex mx-auto'>
        <input ref={deadRef} className='form-control' type='date' />
        <button onClick={()=>{
            props.changeDate(deadRef.current.value)
        }} className='btn btn-info'>Change</button>
       
    </div>
  )
}

export default InputDate