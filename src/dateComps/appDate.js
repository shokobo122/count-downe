import React, { useState } from 'react'
import ShowDate from './showDate'
import InputDate from './inputDate'

function AppDate(props) {
    let [deadLine,setDeadLine]= useState("2024-01-01")

    const changeDate = (_newDate) =>{
        setDeadLine(_newDate);
    }
  return (
    <div>
        <ShowDate deadLine={deadLine} />
        <InputDate changeDate={changeDate} />
    </div>
  )
}

export default AppDate