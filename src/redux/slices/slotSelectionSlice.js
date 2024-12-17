import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    year: 0,
    month:0,
    datesList:[],
    selectedClasses:[]
}

export const slotSelectionSlice = createSlice({
    name:"SlotSelectData",
    initialState:initialState,
    reducers :{
        setYear: (state, action) => {
           state.year = action.payload;
        },
        setMonth: (state, action) => {
            state.month = action.payload;
        },
        setDatesList: (state, action) => {
            state.datesList = action.payload;
        },
        addSeletedClass: (state, action) => {
            state.selectedClasses.push(action.payload);
        },
        removeSeletedClass: (state, action) => {
            state.selectedClasses = state.selectedClasses.filter((ele) => ele.id !== action.payload)
        },
        clearSelectedClasses: (state) =>{
            state.selectedClasses = [];
        }
    }

})


export const { addSeletedClass, removeSeletedClass, setDatesList, setMonth, setYear , clearSelectedClasses} = slotSelectionSlice.actions;

export default slotSelectionSlice.reducer;