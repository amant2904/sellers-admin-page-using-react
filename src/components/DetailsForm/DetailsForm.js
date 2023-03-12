import React, { useState } from "react";

const DetailsForm = (props) => {
    const [product_id, setProductId] = useState("");
    const [price, setPrice] = useState("");
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Electronics");

    const productId_handler = (e) => {
        setProductId(e.target.value);
    }

    const price_handler = (e) => {
        setPrice(e.target.value);
    }

    const name_handler = (e) => {
        setName(e.target.value);
    }

    const category_handler = (e) => {
        setCategory(e.target.value);
    }

    const submitBtn_handler = (e) => {
        e.preventDefault();
        if (product_id.length > 0 && price.length > 0 && name.length > 0) {
            props.liftUpValue({
                id: product_id,
                price: price,
                name: name,
                category: category
            })
        }
        else {
            alert("Invalid Input");
        }
    }

    return (
        <form onSubmit={submitBtn_handler}>
            <label htmlFor="product_id">Product ID</label>
            <input type="number" name="product_id" id="product_id" value={product_id} onChange={productId_handler} />
            <label htmlFor="price">Selling Price</label>
            <input type="number" name="price" id="price" value={price} onChange={price_handler} />
            <label htmlFor="name">Product Name</label>
            <input type="text" name="name" id="name" value={name} onChange={name_handler} />
            <label htmlFor="category">Choose Category</label>
            <select id="category" value={category} onChange={category_handler}>
                <option value="Electronics">Electronics</option>
                <option value="Food">Food</option>
                <option value="SkinCare">Skin Care</option>
            </select>
            <button type="submit">Add Product</button>
        </form>
    )
}

export default DetailsForm;