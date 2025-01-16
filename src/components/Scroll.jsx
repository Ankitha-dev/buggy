import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
function Scroll() {
    const [images,setImages]=useState([])
    async function scrollApi(){
        const response=await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9706019&lng=77.7009166&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        setImages(response?.data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
    }
    useEffect(()=>{
        scrollApi()
    },[])

    
  return (<>
    <h1 className='heading'>Ankitha What's on your mind</h1>
    <div className='scroll'>
       { images.map((x,index)=>{
        return <img key={index}  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+x.imageId}/>
       })}
    </div>
    </>
  )
}

export default Scroll