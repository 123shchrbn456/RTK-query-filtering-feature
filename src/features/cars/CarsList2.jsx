import React from "react";
import { useSelector } from "react-redux";
import { selectControls } from "../filters/filtersSlice";
import { selectFilteredCars, selectDriveFilteredCars1, selectTransmissionTypeFilteredCars2 } from "./carsSlice";

const CarsList2 = () => {
    const controls = useSelector(selectControls);

    // Нижняя часть - не работает как ожидалось
    console.log(controls);
    const driveFilteredCars1 = useSelector((state) => selectDriveFilteredCars1(state, controls.drive));
    const transmissionTypeFilteredCars2 = useSelector((state) =>
        selectTransmissionTypeFilteredCars2(state, driveFilteredCars1, controls.transmissionType)
    );
    const filteredCars = transmissionTypeFilteredCars2;
    console.log(transmissionTypeFilteredCars2);

    const filteredCarsMarkup = filteredCars.map((car) => (
        <li key={car.id}>
            {car.brand} {car.model}
        </li>
    ));

    return <ul>{filteredCarsMarkup}</ul>;
};

export default CarsList2;
