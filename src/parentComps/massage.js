import React from 'react'

function Massage(props) {
  return (
    <div className='w-50 p-3 h3 bg-warning'>
        massege: {props.txt}
        <button className='float-end'>x</button>
    </div>
  )
}

export default Massage