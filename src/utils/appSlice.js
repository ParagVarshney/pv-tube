import { createSlice } from "@reduxjs/toolkit";

// Check if screen is mobile (width < 768px)
const isMobile = window.innerWidth < 768;

const appSlice = createSlice({
    name: "app",
    initialState: {
        isToggleMenu: !isMobile,  // ❌ Closed on mobile, ✅ Open on larger screens
    },
    reducers: {
        toggleMenu: (state) => {
            state.isToggleMenu = !state.isToggleMenu;
        },
        closeMenu: (state) => {
            state.isToggleMenu = false;
        }
    }
});

export default appSlice.reducer;
export const { toggleMenu, closeMenu } = appSlice.actions;
