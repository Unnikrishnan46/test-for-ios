import { createSlice,PayloadAction } from "@reduxjs/toolkit";


const initialState:any = {
    photoAndVideoPermissionModal:false,
    isVoiceRecordModal:false,
    imageState:null,
}

const modalState = createSlice({
    name:"modalState",
    initialState,
    reducers:{
        setPhotoAndVideoPermissionModal:(state,action:PayloadAction<any>)=>{
            state.photoAndVideoPermissionModal = action.payload;
        },
        setIsVoiceRecordModal:(state,action:PayloadAction<any>)=>{
            state.isVoiceRecordModal = action.payload;
        },
        setImageState:(state,action:PayloadAction<any>)=>{
            state.imageState = action.payload;
        },
    }
});


export const {setPhotoAndVideoPermissionModal, setIsVoiceRecordModal,setImageState} = modalState.actions;

export default modalState.reducer;