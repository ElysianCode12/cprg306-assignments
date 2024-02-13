"use client";

import { useState } from "react";


export default function NewItem() {
    const [itemname, setName] = useState("");
    const [quantity, setQuantity] = useState("1");
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {itemname, quantity, category};
        console.log(item);

        alert(`Added item: ${itemname}, quantity: ${quantity}, category: ${category}`);

        setName("");
        setQuantity("1");
        setCategory("Produce");
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
            <div className="min-h-screen bg-blue-100 flex items-center justify-center">
            <form onSubmit={handleSubmit}>
                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                    <div className="col-span-2">
                        <input type="text" required onChange={handleNameChange} value={itemname} 
                        className="mt-1 p-1 block w-full rounded-md text-black bg-gray-300 focus:bg-white" />
                    </div>

                    <div>
                        <input type="number" onChange={handleQuantityChange} value={quantity} 
                        className="mt-1 p-1 block w-full rounded-md text-black bg-gray-300 focus:bg-white"/>
                    </div>

                    <div>
                        <select onChange={handleCategoryChange} value={category} 
                        className="mt-1 p-1 block w-full rounded-md text-black bg-gray-300 focus:bg-white">
                            <option value="Produce">Produce</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Bakery">Bakery</option>
                            <option value="Meat">Meat</option>
                            <option value="Frozen Foods">Frozen Foods</option>
                            <option value="Canned Goods">Canned Goods</option>
                            <option value="Dry Goods">Dry Goods</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Household">Household</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="col-span-2">
                        <button type="submit" className="my-1 w-full py-1 px-1 bg-sky-600 hover:bg-sky-500 rounded-md text-white">
                        +
                        </button>
                    </div>
                </div>
            </form>
            </div>
        </main>
    );
}