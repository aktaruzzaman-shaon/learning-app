import React from 'react'
import Sidebar from './_components/Sidebar'
import Header from './_components/Header'

const HomeLayout = ({ children }) => {
    return (
        <div>
            <div className='h-full w-64 md:flex flex-col fixed inset-y-0 z-50 hidden'>
                <Sidebar></Sidebar>
            </div>
            <Header></Header>
            <div className='ml-64 p-5'>
                {children}
            </div>
        </div>
    )
}

export default HomeLayout