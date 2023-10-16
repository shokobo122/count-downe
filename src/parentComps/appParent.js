import React, { useState } from 'react'
import Massage from './massage'

function AppParent() {
    let [show,setShow] = useState(true);

    const hideMassege =() =>{
        setShow(false)
    }
  return (
    <div>
       <h2>Parent comp</h2>
      { show && <Massage hideMassege1={hideMassege} txt="Work from parent" /> }
    </div>
  )
}

export default AppParent