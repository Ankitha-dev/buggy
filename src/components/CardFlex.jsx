import { useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import Scroll from './Scroll'
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'
function Card(props) {
  const items=useSelector((state)=>state.cart.items)
const img_url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
  return (
    <div className="card">
      <img
        src={img_url+props.data.info.cloudinaryImageId}
        alt=""
      />
      <div className="card-text-con">
        <h4 className="buggy-c">{props.data.info.name}</h4>
        <p>
          <span className="star-span">
            <i className="bi bi-star-fill"></i>
          </span>
          <span>{props.data.info.avgRating}</span>. <span>{props.data.info.sla.slaString}</span>
        </p>
        <p className="buggy-c">{props.data.info.cuisines.join(",")}</p>
        <p>{props.data.info.locality+items.length}</p>
      </div>
    </div>
  );
}

function CardFlex() {
  const [resto,setResto]=useState([])
  const [search,setSearch]=useState("")
  const [filterArray,setFilterArray]=useState([])
  async function swiggyData(){
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9706019&lng=77.7009166&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const originalData=await data.json()
    setResto(originalData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilterArray(originalData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  useEffect(()=>{
    swiggyData()
  },[])
  
  function ratings(){
    const filterRatings=resto.filter((x)=>{
      return x?.info?.avgRating>4.5
    })
    setResto(filterRatings)
  }
  function delivery(){
   const filterDelivery= filterArray.filter((y)=>{
      return y?.info?.sla?.deliveryTime < 25
    })
    setResto(filterDelivery)
  }
  function searchResto(){
   const filterResto= resto.filter((x)=>{
      return x?.info?.name?.toLowerCase().includes(search.toLowerCase())
    })
    setResto(filterResto)
  }
  if(resto.length==0){
    return <div>
    <Shimmer/>
  </div>
  }
  else{

    return (<>
      <Scroll/>
      <div className="filter-con">
        <h1 className="f-s">Restaurants with online food delivery in Bangalore</h1>
        <div>
          <div>
            <button className="f-btn" onClick={ratings}>ratings 4.5+</button>
            <button className="f-btn m-l" onClick={delivery}>Fast Delivery</button>
          </div>
          <div>
            <input className="s-i" type="text" placeholder="search" value={search} onChange={(x)=>{setSearch(x.target.value)}}/>
            <button className="f-btn s-btn" onClick={searchResto}>search</button>
          </div>
        </div>
  
      </div>
      <div className="card-flex">
      
        {resto.map((x,index) => {
          return <Link to={"/city/bangalore/"+x.info.id} key={index}><Card data={x} key={index}/></Link> ;
        })}
      </div>
      </>
    );
  }
  
 
}

export default CardFlex;
