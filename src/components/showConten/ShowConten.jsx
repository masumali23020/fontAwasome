import React from 'react';
import GridIcons from '../gridIcons/GridIcons';
import SideManu from './SideManu';

const ShowConten = ({result,handelChange}) => {
 
  return (
    <div className='mt-10 w-full bg-[#f0f1f3] grid grid-flow-col' >
    {/* side manu  */}
    <div className='hidden xl:block h-auto'>
        <SideManu handelChange={handelChange} />
    </div>
    {/* all icons show  */}
    <div className=' col-span-1'>
      <div className='p-6 flex justify-between items-center'>
        <p>26154 icons</p>
        <p>Page 1 of 20</p>
      </div>
      <GridIcons result={result} />

    </div>
  </div>
  )
}

export default ShowConten