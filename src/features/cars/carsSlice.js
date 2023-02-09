import { createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const carsAdapter = createEntityAdapter({
    sortComparer: (a, b) => b.id,
});

const initialState = carsAdapter.getInitialState({
    streetCredentials: false,
});

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCars: builder.query({
            query: () => "/cars",
            transformResponse: (responseData) =>
                carsAdapter.setAll(initialState, responseData) /* creates Normalized data*/,
            providesTags: (result, error, arg) => [
                { type: "Cars", id: "LIST" },
                ...result.ids.map((id) => ({ type: "Cars", id })),
            ],
        }),
    }),
});

export const { useGetCarsQuery } = extendedApiSlice;

// returns the query result object
export const selectCarsResult = extendedApiSlice.endpoints.getCars.select();
// Creates memoized selector
const selectCarsData = createSelector(
    selectCarsResult,
    (carsResult) => {
        return carsResult.data;
    } // normalized state object with ids & entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllCars,
    selectById: selectCarsById,
    selectIds: selectCarsIds,
    // Pass in a selector that returns the posts slice of state
} = carsAdapter.getSelectors((state) => selectCarsData(state) ?? initialState);

// Единственный рабочий вариант на данный момент
export const selectFilteredCars = createSelector(
    [selectAllCars, (state, filterObj) => filterObj],
    (cars, filterObj) => {
        // console.log("Selector is activated");
        return cars.filter(
            (car) =>
                car.drive.includes(filterObj.drive) &&
                car.engine.fuel.includes(filterObj.fuel) &&
                car.transmissionType.includes(filterObj.transmissionType) &&
                car.brand.includes(filterObj.brand)
        );
    }
);

export const carsSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {},
});

export const carsReducer = carsSlice.reducer;

// export const selectStreetCredentials = (state) => state.cars.streetCredentials; не рабочий вариант

// Из доков : Как вариант использования One option is to create a "selector factory" - a function that runs createSelector() and generates a new unique selector instance every time it's called:
// const makeSelectItemsByCategory = () => {
//     const selectItemsByCategory = createSelector(
//         [(state) => state.items, (state, category) => category],
//         (items, category) => items.filter((item) => item.category === category)
//     );
//     return selectItemsByCategory;
// };

// Шлак нижние два селектора ---------------------------------------------
// export const selectDriveFilteredCars1 = createSelector(
//     [selectAllCars, (state, driveType) => driveType],
//     (cars, driveType) => {
//         // console.log("1 is activated");
//         return cars.filter((car) => car.drive.includes(driveType));
//     }
// );

// export const selectTransmissionTypeFilteredCars2 = createSelector(
//     [selectAllCars, selectDriveFilteredCars1, (state, transmissionType) => transmissionType],
//     (cars, transmissionType) => {
//         // console.log("2 is activated");
//         return cars.filter((car) => car.transmissionType.includes(transmissionType));
//     }
// );

// ------------------------------------------------------------------------
