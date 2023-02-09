import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import { extendedApiSlice } from "./features/cars/carsSlice";

const container = document.getElementById("root");
const root = createRoot(container);

store.dispatch(extendedApiSlice.endpoints.getCars.initiate());

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
