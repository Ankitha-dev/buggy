import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { addItem } from "../redux/createSlice";
import {useDispatch} from 'react-redux'
function RestoItems(props) {
  const [count,setCount]=useState(0)
   const dispatch=useDispatch()
 function decrement(){

    setCount((count) => (count > 0 ? count - 1 : 0));

 }
 function increment(){
    setCount(count+1)
    dispatch(addItem({name:props.data.card.info.name,cost:props.data.card.info.defaultPrice/100}))
}
  return (
    <div className="rec-flex">
      <div className="c-1">
        <p>
          <span>
            <i className="bi bi-0-square-fill c-g"></i>
          </span>
          Bestseller
        </p>
        <h4>{props.data.card.info.name}</h4>
        <p>
          <span>
            <i className="bi bi-currency-rupee"></i>
          </span>
          {props.data.card.info.defaultPrice/100}
        </p>
        <p className="l-p">
          <span>
            <i className="bi bi-star-fill c-g"></i>
          </span>{" "}
          4.6 (1999)
        </p>
      </div>
      <div className="relative">
        <img
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+props.data.card.info.imageId}
          alt=""
        />
        <div className="absolute">
          <button onClick={decrement}>-</button>
          <h4>{count}</h4>
          <button onClick={increment}>+</button>
        </div>
      </div>
    </div>
  );
}
function Next() {
  const [restoItems,setRestoItems]=useState([])
 const {id}=useParams()
 const apiUrl="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9706019&lng=77.7009166&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER"
 console.log(apiUrl)
 async function nextPage(){
  const response=await axios.get(apiUrl)
  console.log(response?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
  setRestoItems(response?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
 }
 useEffect(()=>{
  nextPage()
 },[])
  return (
    <div className="next-p">
      <h1 className="f-s-s">Recommended</h1>
      {
        restoItems.map((x,index)=>{
          return <RestoItems key={index} data={x}/>
        })
      }
     
    </div>
  );
}

export default Next;
