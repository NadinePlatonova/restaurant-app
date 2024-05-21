"use client"

import React, { useEffect, useState } from 'react'

type Props = {
    price: number;
    id: number;
    options?: { title: string; additionalPrice: number }[]
}

const Price = ({ price, id, options } : Props) => {
    const [total, setTotal] = useState(price);
    const [quantity, setQuantity] = useState(1);
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        setTotal(
            quantity * (options ? price + options[selected].additionalPrice : price)
        )
    }, [quantity, selected, options, price]);

    return (
        <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
        {/* OPTIONS CONTAINER */}
        <div className="flex gap-4">
            {options?.map((option, index) => (
                <button
                    key={option.title} 
                    className="min-w-[5rem] p-2 ring-1 ring-orange-400 rounded-md"
                    style={{
                        background: selected === index ? "rgb(251 146 60)" : "white",
                        color: selected === index ? "white" : "orange"
                    }}
                    onClick={() => setSelected(index)}
                >
                    {option.title}
                </button>
            ))}
        </div>
        {/* QUANTITY AND CART BUTTON CONTAINER */}
        <div className="flex items-center justify-between">
        {/* QUANTITY */}
            <div className="flex justify-between w-full p-3 ring-1 ring-orange-500">
                <span>Quantity</span>
                <div className="flex gap-4 items-center">
                    <button onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}>{'<'}</button>
                    <span>{quantity}</span>
                    <button onClick={() => setQuantity(prev => (prev < 9 ? prev + 1 : 9))}>{'>'}</button>
                </div>
            </div>
            {/* CART BUTTON */}
            <button className="uppercase w-56 bg-orange-500 text-white p-3 ring-1 ring-orange-500">Add to Cart</button>
        </div>
        </div>
    )
}

export default Price