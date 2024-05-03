import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { citiesProps } from "../../utils/constants";
import { RootState } from "../store";

const initialState={
    place:{
        id:0,
        city:'',
        popular:false,
        places:[{
            name:'',
            image:'',
            desc:'',
            address:'',
            favorite:false
        }],
        description:''
    } as citiesProps
}

const selectedPlace=createSlice({
    name:"placeToVisit",
    initialState,
    reducers:{
        setPlace:(state,action:PayloadAction<citiesProps>)=>{
            state.place=action.payload
        }
    }
})

export const {setPlace}=selectedPlace.actions
export const selectPlace=(state:RootState)=>state.placeToVisit.place

