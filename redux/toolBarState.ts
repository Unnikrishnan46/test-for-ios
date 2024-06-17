import { createSlice,PayloadAction } from "@reduxjs/toolkit";

const initialState:any = {
    selectedTool:"",
}

const toolBarState = createSlice({
    name:"toolBarState",
    initialState,
    reducers:{
        setSelectedTool:(state,action:PayloadAction<any>)=>{
            state.selectedTool = action.payload;
        },
    }
});


export const {setSelectedTool} = toolBarState.actions;

export default toolBarState.reducer;