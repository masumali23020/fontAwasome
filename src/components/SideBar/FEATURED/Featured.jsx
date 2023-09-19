import React from 'react'
import Input from '../Input'

const Featured = ({handelChange}) => {
  return (
   
    <div>
    <h1>Featured</h1>
  <div className=' flex flex-col'>

    <Input
          value="new in V6"
          title="New in V6"
          name="test"
          handelChange={handelChange} />
    <Input 
          value="sponsored"
          title="Sponsored"
          name="test"
          handelChange={handelChange} />
    <Input 
          value="staff Favorites"
          title="Staff Favorites"
          name="test"
          handelChange={handelChange}/>
   

  

  </div>
  </div>
  )
}

export default Featured