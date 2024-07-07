import ThemesDataList from "@/util/themeDataList";
import { createSlice,PayloadAction } from "@reduxjs/toolkit";


const initialState:any = {
    allDiariesData:[],
    newDiaryData:null,
    editDiaryData:null,
    currentContentItemCount:0
}

const curdDiaryState = createSlice({
    name:"curdDiaryState",
    initialState,
    reducers:{
        setAllDiariesData:(state,action:PayloadAction<any>)=>{
            state.allDiariesData = action.payload;
        },
        setNewDiaryData:(state,action:PayloadAction<any>)=>{
            state.newDiaryData = action.payload;
        },
        setCurrentContentItemCount:(state,action:PayloadAction<any>)=>{
            state.currentContentItemCount = action.payload;
        },
        setEditDiaryData:(state,action:PayloadAction<any>)=>{
            state.editDiaryData = action.payload;
        },
    }
});


export const {setAllDiariesData,setNewDiaryData,setCurrentContentItemCount,setEditDiaryData} = curdDiaryState.actions;

export default curdDiaryState.reducer;