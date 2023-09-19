import React from 'react';
import Icon from './Icon';
const GridIcons = ({result}) => {
  const resultsA = result || []

  return (
    <div>
        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-6 grid-flow-row-dense gap-x-1 gap-y-3 justify-evenly cursor-pointer '>
            {resultsA.map((iconSS) =>
                <Icon key={iconSS.id} iconSS={iconSS} />
            )}
           
        </div>

    </div>
  )
}

export default GridIcons