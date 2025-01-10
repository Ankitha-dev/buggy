import { Link } from "react-router-dom"
import {useSelector} from 'react-redux'
function Navbar(){
   const items=useSelector((state)=>state.cart.items)
   console.log(items)
    return <nav className='navbar'>
      <div className='logo-con'>
         <Link to="/">
             <img className='s-logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvSINLFIk_aYYafATc5SFvrMom7b2baIrRkw&s"></img>
         
         </Link>
       <p>WORK <span>LRDE layout marathalli</span></p>
      </div>
      <ul className='nav-items'>
         <li className='list-items'><i className="bi bi-tv"></i>Swiggy Carporate</li>
         <Link to="/search"><li className='list-items'><i className="bi bi-search"></i>Search</li></Link>
         <Link to="/offers"><li className='list-items'><i className="bi bi-gift"></i>Offers</li></Link>
         <li className='list-items'><i className="bi bi-patch-question"></i>Help</li>
         <li className='list-items'><i className="bi bi-person"></i>User</li>
         
         <Link to="/my-cart"><li className='list-items'><i className="bi bi-bag-plus"></i>Cart{items.length}</li></Link>
      </ul>
    </nav>
 }

 export default Navbar
