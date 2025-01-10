import React from 'react'
import { Outlet,Link } from 'react-router-dom'
function Search() {
  return (
    <div className='search-con'>
        <div className='s-left'>
            <Link to="/search/biryani"><h1>Biryani</h1></Link>
            <Link to="/search/ice-creams"><h1>Ice creams</h1></Link>
            <Link to="/search/north-foods"><h1>North indian foods</h1></Link>
        </div>
        <div className='s-right'>
           <Outlet/>
        </div>
    </div>
  )
}

export default Search