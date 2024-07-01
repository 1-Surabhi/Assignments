import{configureStore} from "@reduxjs/toolkit";
import Userslice from "../feature/Website/Userslice";
 export const store=configureStore({
    reducer:{
        user:Userslice
    }
})