import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const user_get=createAsyncThunk("user_get",async()=>{
    const res=await axios.get(`http://localhost:3000/user`);
    console.log(res.data);
    return res.data;
})


export const user_insert=createAsyncThunk("user_insert",async(formvalue)=>{
    const res=await axios.post(`http://localhost:3000/user`,formvalue);
    console.log(res.data);
    return res.data;
})

export const user_update=createAsyncThunk("user_update",async(formvalue)=>{
    const res=await axios.patch(`http://localhost:3000/user/${formvalue.id}`,formvalue);
    return res;
})

export const user_delete=createAsyncThunk("user_delete",async(id)=>{
    const res=await axios.delete(`http://localhost:3000/user/${id}`);
    return res;
})

export const UserSlice=createSlice({
    name:"user",
    initialState:{
        demo:"Surabhi Prajapati",
        user:[]
    },
    reducers:{

    },
 
    extraReducers:{
        [user_get.fulfilled]:(state,actions)=>{
            state.user=actions.payload;
        }
    }
})

export const{}=UserSlice.actions
export default UserSlice.reducer