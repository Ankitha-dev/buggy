import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import Offer from "./pages/Offer";
import Search from "./pages/Search";
import Biryani from "./pages/Biryani";
import IceCream from "./pages/IceCream";
import NorthFoods from "./pages/NorthFoods";
import Next from "./pages/Next";
import Cart from "./pages/Cart";
function App() {
  return<BrowserRouter>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route path="/search" element={<Search />}>
            <Route path="/search" element={<Biryani/>}></Route>
            <Route path="/search/ice-creams" element={<IceCream/> }></Route>
            <Route path="/search/north-foods" element={<NorthFoods/> }></Route>
        </Route>
        <Route path="/offers" element={<Offer/>}></Route>
        <Route path="/city/bangalore/:id" element={<Next/>}></Route>
        <Route path="/my-cart" element={<Cart/>}></Route>
      </Routes>
    </div>
  </BrowserRouter>;
}

export default App;
