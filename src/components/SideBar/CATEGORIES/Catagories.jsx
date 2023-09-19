import React from 'react'
import Input from '../Input'

const Catagories = ({handelChange}) => {
  return (
    
    <div>
    <h1>Catagories</h1>
  <div className=' flex flex-col'>

    <Input
          value="food"
          title="Food"
          name="test"
          handelChange={handelChange} />
    <Input 
          value="music"
          title="Music"
          name="test"
          handelChange={handelChange}
          />
    <Input 
          value="tecnology"
          title="Tecnology"
          name="test"
          handelChange={handelChange}/>
    <Input 
          value="entertainment"
          title="Entertainment"
          name="test"
          handelChange={handelChange}/>
    <Input 
          value="business"
          title="Business"
          name="test"
          handelChange={handelChange}/>
   

  

  </div>
  </div>
  )
}

export default Catagories