import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectDrive,
    setDrive,
    selectTransmissionType,
    setTransmissionType,
    selectBrand,
    setBrand,
} from "./filtersSlice";

const FilterCars = () => {
    const dispatch = useDispatch();

    const drive = useSelector(selectDrive);
    const transmissionType = useSelector(selectTransmissionType);
    const brand = useSelector(selectBrand);

    const onDriveChanged = (e) => {
        dispatch(setDrive(e.target.value));
    };

    const onTransmissionTypeChanged = (e) => {
        dispatch(setTransmissionType(e.target.value));
    };

    const onSearchBrandChanged = (e) => {
        dispatch(setBrand(e.target.value));
    };

    return (
        <div>
            <select name="drive" value={drive} onChange={onDriveChanged}>
                <option value="" selected>
                    drive type
                </option>
                <option value="FWD">FWD</option>
                <option value="RWD">RWD</option>
                <option value="AWD">AWD</option>
            </select>
            <select name="transmissionType" value={transmissionType} onChange={onTransmissionTypeChanged}>
                <option value="" selected>
                    transmission type
                </option>
                <option value="automatic">automatic</option>
                <option value="manual">manual</option>
            </select>
            <input onChange={onSearchBrandChanged} value={brand} placeholder="Search Brand" />
        </div>
    );
};

export default FilterCars;
