import React from "react";
import FilterCars from "../filters/FilterCars";
import CarsList from "./CarsList";
// import CarsList2 from "./CarsList2";

const Cars = () => {
    return (
        <section className="cars">
            <FilterCars />
            <CarsList />
            {/* <CarsList2 /> */}
        </section>
    );
};

export default Cars;
