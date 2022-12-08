import {createSlice} from '@reduxjs/toolkit'


export const userSlice = createSlice({
    name : "user",
    reducers : {
        login: (state,action) =>{
            state.value = action.payload;
        },
        logout: (state,action) =>{
            state.value = {email:"" ,name:"", lastname:"", address:""};
        }


    },
    initialState : {value :{email:"" ,name:"", lastname:"", address:""}} ,

})


export const {login,logout} = userSlice.actions;
export default userSlice.reducer;