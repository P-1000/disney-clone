import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    name : "",
    email : "",
    photo : "",
    useri: "",
}

const userSlice = createSlice({
        name : "user",
        initialState,
        reducers : {
            setUserLoginDetails : (state, action) => {
                state.useri = action.payload.useri
                state.name = action.payload.name;
                state.email = action.payload.email;
                state.photo = action.payload.photo;
                
            },
            setSignOut : (state) => {
                state.name = null;
                state.email = null;
                state.photo = null;
            }

        }
})

export const { setUserLoginDetails, setSignOut } = userSlice.actions;

export const sui = (state) => state.user.useri;
export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;

