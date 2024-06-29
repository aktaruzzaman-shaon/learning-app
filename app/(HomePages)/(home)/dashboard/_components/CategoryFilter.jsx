"use client"
import React, { useState } from 'react'

const CategoryFilter = () => {
    const [activeIndex, setActiceIndex] = useState(0)
    const filterOptions = [
        {
            id: 1,
            name: 'all',
            value: "all"
        },
        {
            id: 2,
            name: 'development',
            value: "development"
        },
        {
            id: 3,
            name: 'design',
            value: "design"
        },
        {
            id: 4,
            name: 'backend',
            value: "backend"
        },
    ]
    return (
        <div className='flex gap-5 '>
            {
                filterOptions.map((item, index) =>
                (
                    <button key={index} className={`border p-2 px-4 text-[14px] rounded-md hover:border-red-800 font-semibold ${activeIndex == index ? "bg-red-700" : null} `} onClick={() => setActiceIndex(index)}>
                        <h2>{item.name}</h2>
                    </button>
                )
                )
            }
        </div>
    )
}

export default CategoryFilter