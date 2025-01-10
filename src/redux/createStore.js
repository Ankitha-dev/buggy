

import { configureStore } from "@reduxjs/toolkit";
import prasanth from "./createSlice";
const store=configureStore({
     reducer:{
        cart:prasanth
     }
})

export default store