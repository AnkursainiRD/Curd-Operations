import React, { useEffect, useState } from 'react'
import { tableTitle } from '../data/tableTitles'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import { deleteCardData, getCardData } from '../services/operations/DataOperations'
import SearchBar from '../components/SearchBar'

function AllData() {
    const {data}=useSelector((state)=>state.data)
    const [searchItem,setSearchItem]=useState(null)
    const {filterData}=useSelector((state)=>state.data)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    function deleteData(e){
        const id=e.target.value;
        console.log("working",e.target.value);
        deleteCardData(id,navigate)
    }

    async function getData(){
        try {
          await getCardData(dispatch)
        } catch (error) {
            console.log(error);
        }
      }
      useEffect(()=>{
        getData()
      },[]) 
      console.log("filter data: ",filterData);
  return (

    // <div className='flex flex-col mt-16'>
    //     <div className='sm:flex-col lg:flex items-center justify-evenly mb-10'>
    //         <h1 className='font-bold text-2xl text-center m-11'>My data</h1>
    //         <SearchBar/>
    //     </div>
    //     <div class="relative overflow-x-auto shadow-md sm:rounded-lg ">
    // <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    //     <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    //         <td>
    //             { tableTitle?.map((link)=>{
    //                 return(
    //                     <th key={link.id} scope="col" class="px-6 py-3 text-[18px]">
    //                         {link.title}
    //                     </th>
                
    //                 )
    //             })}
    //         </td>
    //     </thead>
    //     <tbody className='mb-10'>
    //         <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    //            {!data ? ("No Data"):
    //            (
    //                 data.map((data,index)=>{
    //                     return(
    //                         <tr key={data._id}>
    //                             <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
    //                                 {data.name}
    //                              </th>
    //                              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
    //                                 {data.nameOfCourt}
    //                              </th>
    //                              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
    //                                 {data.caseNumber}
    //                              </th>
    //                              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
    //                                 {data.positionStage}
    //                              </th>
    //                              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
    //                                 {new Date(data.prevDate).toLocaleDateString('en-GB')}
    //                              </th>
    //                              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
    //                                 {new Date(data.nextDate).toLocaleDateString('en-GB')}
    //                              </th>
    //                              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
    //                                 {data.phoneNumber}
    //                              </th>

    //                              <td class="px-1 py-4 text-right ">
    //                                    <Link to={`/editData/${data._id}`} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
    //                                     <span> / </span>
    //                                     <button onClick={deleteData} value={`${data._id}`} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
    //                              </td>
    //                         </tr>
    //                     )
    //                 })
    //            )}
                
    //         </tr>
    //     </tbody>
    // </table>
    //     </div>
    // </div>

    <div className=' items-center mt-24 lg:ml-'>
        <div className='sm:flex-col lg:flex items-center justify-evenly mb-10'>
                <h1 className='font-bold text-2xl text-center m-11'>My data</h1>
                <div className='px-3'> <SearchBar/></div>
            </div>            

<div class="relative overflow-x-auto shadow-md sm:rounded-lg ">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr> {
            tableTitle?.map((title)=>(
                
                <th scope="col" class="px-6 py-3 text-[17px]" key={title.id}>
                   {title.title}  
                </th>
           
            ))
           } </tr>
        </thead>
        <tbody>
            {
               !data?(<div className='text-center w-full text-2xl'>No Data</div>):
               ( data?.map((card)=>(
                
                    <tr class="bg-white border-b text-[15px] dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {card.name}
                </th>
                <td class="px-6 py-4">
                    {card.nameOfCourt}
                </td>
                <td class="px-6 py-4">
                    {card.caseNumber}
                </td>
                <td class="px-6 py-4">
                    {card.positionStage}
                </td>
                <td class="px-6 py-4">
                    {new Date(card.prevDate).toLocaleDateString('en-GB')}
                </td>
                <td class="px-6 py-4">
                    {new Date(card.nextDate).toLocaleDateString('en-GB')}
                </td>
                <td class="px-6 py-4">
                    {card.location}
                </td>
                <td class="px-6 py-4">
                    {card.phoneNumber}
                </td>
                <td class="flex items-center px-6 py-4">
                    <Link to={`/editData/${card._id}`} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                    <button onClick={deleteData} value={`${card._id}`} class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</button>
                </td>
            </tr>
                )))
            }
            
        </tbody>
    </table>
</div>

    </div>
  )
}

export default AllData