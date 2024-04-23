import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"


interface ThemeSliceProps{
    value:string
}

const initialState:ThemeSliceProps={
    value:'light'
}

const themeSlice=createSlice({
    name:'theme',
    initialState,
    reducers:{
        setTheme:(state,action:PayloadAction<string>)=>{
            state.value=action.payload
        }
    }

})

export const {setTheme}=themeSlice.actions
export const selectTheme=(state:RootState)=>state.theme.value

export default themeSlice.reducer