import { createSlice,PayloadAction } from "@reduxjs/toolkit";


const initialState:any = {
    photoAndVideoPermissionModal:false,
}

const modalState = createSlice({
    name:"modalState",
    initialState,
    reducers:{
        setPhotoAndVideoPermissionModal:(state,action:PayloadAction<any>)=>{
            state.photoAndVideoPermissionModal = action.payload;
        },
    }
});


export const {setPhotoAndVideoPermissionModal} = modalState.actions;

export default modalState.reducer;