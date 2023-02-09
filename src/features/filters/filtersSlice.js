import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    drive: "",
    fuel: "",
    transmissionType: "",
    brand: "",
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setDrive: (state, action) => {
            state.drive = action.payload;
        },
        setFuel: (state, action) => {
            state.fuel = action.payload;
        },
        setTransmissionType: (state, action) => {
            state.transmissionType = action.payload;
        },
        setBrand: (state, action) => {
            state.brand = action.payload;
        },
    },
});

export const { setDrive, setFuel, setTransmissionType, setBrand } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

export const selectDrive = (state) => state.filter.drive;
export const selectFuel = (state) => state.filter.fuel;
export const selectTransmissionType = (state) => state.filter.transmissionType;
export const selectBrand = (state) => state.filter.brand;

export const selectControls = (state) => state.filter;
