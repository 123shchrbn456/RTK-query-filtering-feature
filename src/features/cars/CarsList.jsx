import React from "react";
import { useSelector } from "react-redux";
import { selectControls } from "../filters/filtersSlice";
import { selectFilteredCars } from "./carsSlice";

const CarsList = () => {
    const controls = useSelector(selectControls);

    const filteredCars = useSelector((state) => selectFilteredCars(state, controls));

    const filteredCarsMarkup = filteredCars.map((car) => (
        <li key={car.id}>
            {car.brand} {car.model}
        </li>
    ));

    return <ul>{filteredCarsMarkup}</ul>;
};

export default CarsList;
