import React, { useState } from 'react'
import { tableTitle, tehsil } from '../data/tableTitles'
import { itemSearchApi } from '../services/operations/DataOperations'
import { useDispatch, useSelector } from 'react-redux'
import { clearFilterSearch } from '../slice/dataSlice'

function SearchBar() {
    const {fileterData}=useSelector(state=>state.data)
    const [selected,setSelected]=useState(null)
    const [searchValue,setSearchValue]=useState(null)
    const dispatch=useDispatch()


    function handleChange(e){
        setSelected(e.target.value)
        console.log("hereee",selected);
    }
    if(selected=="allData"){
        console.log("hereee",selected);
        dispatch(clearFilterSearch())
    }

    function handleInputChange(e){
        let svalue=(e.target.value.toLowerCase())
        setSearchValue(svalue);
    }

    async function handleClick(e){
        e.preventDefault()
        console.log(selected,searchValue);
        itemSearchApi(selected,searchValue,dispatch)
    }
  return (
    <div>
           
<form class="max-w-lg mx-auto">
    <div class="flex">
        <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <select onChange={handleChange} id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">All categories 
            <option  value="allData">All Data</option>
            {
                tableTitle?.map((title)=>(
                    <option id='dropdown-button' key={title.id} value={title.value}>
                        {title.title}
                    </option>
                ))
            }
        </select>
        <div class="relative w-full lg:w-[15vw]">
            <input onChange={handleInputChange} type="text" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search here..." required />
            <button onClick={handleClick} type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span class="sr-only">Search</span>
            </button>
        </div>
    </div>
</form>

    </div>
  )
}

export default SearchBar