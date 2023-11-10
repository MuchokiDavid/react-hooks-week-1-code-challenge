import React from 'react'

function Search() {
  return (
    <div>
        <input
        type="text"
        name="search"
        className="mt-4 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Search..."      
        />
    </div>
  )
}

export default Search