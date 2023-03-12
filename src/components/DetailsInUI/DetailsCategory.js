import React from "react";

const DetailsCategory = (props) => {

    const dltBtn_handler = (e) => {
        localStorage.removeItem(e.target.parentElement.children[0].textContent)
        e.target.parentElement.remove();
    }

    return (
        <React.Fragment>
            <h2>{props.name}</h2>
            {props.productsList.map((i) => {
                return <div key={i.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "30%" }}>
                    <p>{i.id}</p>
                    <p>NAME = {i.name}</p>
                    <p>PRICE = {i.price}</p>
                    <button onClick={dltBtn_handler}>delete</button>
                </div>
            })}
        </React.Fragment>
    )
}

export default DetailsCategory;