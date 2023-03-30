import React from 'react'
import Div2 from './div2'
import Div3 from './div3'


function Div1() {
  return (
    <div style={{border: '2px solid yellow', width:400, padding:10 , marginLeft:250 , marginTop:50}}>
       <Div2 />
       <Div3 />
    </div>
  )
}

export default Div1