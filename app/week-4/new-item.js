"use client";

import { useState } from "react";


export default function NewItem() {
    const [itemname, setName] = useState("");
    const [quantity, setQuantity] = useState("1");
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {itemname, quantity, category};
        console.log(item);

        alert(`Added item: ${itemname}, quantity: ${quantity}, category: ${category}`);

        setName("");
        setQuantity("");
        setCategory("");
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <main>
            <h1>putangina</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex justify-center">
                    <input required onChange={handleNameChange} value={itemname} />
                    <button type="submit">+</button>
                </div>
            </form>
        </main>
    );
}