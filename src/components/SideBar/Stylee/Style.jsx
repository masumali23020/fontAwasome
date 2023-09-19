
import React from 'react'
import Input from '../Input'

const Style = ({handelChange}) => {
  return (
    <div>
    <h1>Styles</h1>
  <div className=' flex flex-col '>
      
      <Input
          value="solid"
          title="Solid"
          name="test"
          handelChange={handelChange} />
         
     
    <Input 
          value="regular"
          title="Regular"
          name="test"
          handelChange={handelChange} />
    <Input 
          value="light"
          title="Light"
          name="test"
          handelChange={handelChange}/>
    <Input 
          value="thin"
          title="Thin"
          name="test"
          handelChange={handelChange}/>
    <Input 
          value="duotone"
          title="Duotone"
          name="test"
          handelChange={handelChange} />

  

  </div>
  </div>
  )
}

export default Style