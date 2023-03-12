import React from "react";
import DetailsCategory from "./DetailsCategory";

const AllDetails = (props) => {
    localStorage.setItem(props.latestEntry.id, JSON.stringify(props.latestEntry));

    const ElectronicsItems = [];
    const FoodItems = [];
    const SkinCareItems = [];

    for (let i in localStorage) {
        if (i === "length") {
            break;
        }
        let obj = JSON.parse(localStorage[i]);
        if (obj.category === "Electronics") {
            ElectronicsItems.push(obj);
        }
        else if (obj.category === "Food") {
            FoodItems.push(obj);
        }
        else if (obj.category === "SkinCare") {
            SkinCareItems.push(obj);
        }
    }
    return (
        <React.Fragment>
            <h1>All Items :-</h1>
            <DetailsCategory name="Electronics Items" productsList={ElectronicsItems} />
            <DetailsCategory name="Food Items" productsList={FoodItems} />
            <DetailsCategory name="Skin Care Items" productsList={SkinCareItems} />
        </React.Fragment>
    )
}

export default AllDetails;