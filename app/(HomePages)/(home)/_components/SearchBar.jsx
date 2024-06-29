import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
    return (
        <div className='flex gap-3 text-[14px] items-center border p-2 rounded-md '>
            <Search height={17}></Search>
            <input type="text" placeholder='Search course' className='bg-transparent outline-none' />
        </div>
    )
}

export default SearchBar