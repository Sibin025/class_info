import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    scheduledClasses: [],
    isUseLoggedIn:false,
}

const userSlice = createSlice({
    name:"UserData",
    initialState: initialState,
    reducers:{
        addItemToScheduledClasses: (state, action) => {
           const { month, year, monthInfo, cards} = action.payload;
           const item = state.scheduledClasses.find((ele) => ele['month'] === month && ele['year'] === year);
           
           if(item !== undefined) {
              item?.cards?.push(...cards);
              return;
           }
           
           const tempObj = {
            "month": month,
            "year": year,
            "monthInfo":monthInfo,
            "cards":[
                ...cards
            ]
           }
           state.scheduledClasses.push(tempObj);
        },
        removeCardFromItem: (state, action) => {
            const { month, year, id} = action.payload;
            const updatedValues = state.scheduledClasses.map((ele) => {
                if(ele['month'] === month && ele['year'] === year){
                    const newvalues = {
                        ...ele,
                        "cards":ele?.cards?.filter(c => c.id !== id)
                    }

                    if(newvalues?.cards?.length === 0){
                        return null;
                    }

                    return newvalues;
                }
            }).filter(c => c !== null);
    
            state.scheduledClasses = updatedValues;
            
        },
        removeItemFromScheduledClasses:(state,action) => {
            const { month, year} = action.payload;
            state.scheduledClasses.filter(s => s['month'] !== month && s['year'] !== year)
        },
        setisUseLoggedIn:(state,action)=> {
            state.isUseLoggedIn = action.payload
        }
    }
})


export const { addItemToScheduledClasses, removeItemFromScheduledClasses, removeCardFromItem, setisUseLoggedIn } = userSlice.actions;

export default userSlice.reducer;