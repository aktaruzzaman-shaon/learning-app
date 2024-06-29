"use client"
import { Layout, Mail, Search, Shield } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const Sidebar = () => {
    const menuList = [
        {
            id: 1,
            name: "Browse",
            icon: Search,
            path: '/browse'
        },
        {
            id: 2,
            name: "Dashboard",
            icon: Layout,
            path: '/dashboard'
        },
        {
            id: 3,
            name: "Upgrade",
            icon: Shield,
            path: '/upgrade'
        },
        {
            id: 4,
            name: "Newsletter",
            icon: Mail,
            path: '/newsletter'
        }
    ]

    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className='h-full border-r flex flex-col overflow-y-auto shadow-md' >
            <div className='p-5 border-5'>
                <Image src="/learning_logo.jpg" alt='logo' width={170} height={100}></Image>
            </div>
            <div className='flex flex-col'>
                {
                    menuList.map((item, index) =>
                        <div className={`flex gap-2 items-center p-4 px-6 hover:bg-slate-800 cursor-pointer ${activeIndex == index ? 'bg-red-600 text-neutral-700' : null}`} onClick={() => setActiveIndex(index)}>
                            <item.icon />
                            <button>{item.name}</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Sidebar