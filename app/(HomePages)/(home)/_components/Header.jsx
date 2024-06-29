"use client"
import React, { useEffect } from 'react'
import SearchBar from './SearchBar'
import { Search } from 'lucide-react'
import { UserButton, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

const Header = () => {
    const { user } = useUser();
    const router = useRouter();
    useEffect(() => {
        console.log(user)
    }, [user])
    console.log(user)
    return (
        <div className='ml-64 p-5 border-b flex items-center justify-between'>
            <SearchBar></SearchBar>

            {!user ? < button onClick={()=> router.push('/sign-in')}> Login</button> : <UserButton className=" text-white">G</UserButton>
            }

        </div >
    )
}

export default Header