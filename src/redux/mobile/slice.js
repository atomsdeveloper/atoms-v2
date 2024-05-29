import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    menuIsOpen: false
};

const mobileSlice = createSlice({
    name: "mobile",
    initialState,
    reducers: {
        setMobileMenu: (state) => {
            state.menuIsOpen = state.menuIsOpen ? false : true;  
        },
    }
})
export const { setMobileMenu } = mobileSlice.actions;
export default mobileSlice.reducer;
