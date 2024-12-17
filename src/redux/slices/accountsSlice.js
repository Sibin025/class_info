import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users:[],

}

const accountsSlice = createSlice({
      name:"accountData",
      initialState:initialState,
      reducers:{
        doSignUp:(state,action)=> {
           state.users.push(action.payload);
        },
      }
})


export const { doSignUp, doLogin } = accountsSlice.actions;

export default accountsSlice.reducer;
