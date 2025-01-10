import React from 'react'
function ShimmerCard(){
    return <div className='s-card'>
       <div className='p-0'>

       </div>
       <p className='p-1'></p>
       <p className='p-2'></p>
       <p className='p-3'></p>
    </div>
}
function Shimmer() {
  return (
    <div className='card-flex'>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
    </div>
  )
}

export default Shimmer