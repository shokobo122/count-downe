import React, { useEffect, useState } from 'react'

function ShowDate(props) {
    let [days,setDays] = useState(999);

    useEffect(() =>{
        let time = Date.parse(props.deadLine) - Date.now();
        let newDays = Math.floor(time / (1000 * 60 * 60 * 24));
        setDays(newDays)
    },[props.deadLine])

  return (
    <div className='col-lg-6 text-center mx-auto'>
        <h2>Date Count Down: {props.deadLine}</h2>
        <h3>Date left: {days}</h3>
    </div>
  )
}

export default ShowDate