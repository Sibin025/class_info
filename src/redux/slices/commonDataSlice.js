import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   isModal: false,
}

const commonDataSlice = createSlice({
    name:"commonData",
    initialState: initialState,
    reducers:{
        closeModal: (state) => {
          state.isModal = false;
        },
        toggleModal: (state) => {
            state.isModal = !state.isModal;
        },
    }
})


export const { closeModal, toggleModal } = commonDataSlice.actions;

export default commonDataSlice.reducer;