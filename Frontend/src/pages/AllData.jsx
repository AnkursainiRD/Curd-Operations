import React, { useEffect, useState } from 'react'
import { tableTitle } from '../data/tableTitles'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import { deleteCardData, getCardData } from '../services/operations/DataOperations'
import SearchBar from '../components/SearchBar'
import ConfirmationModal from '../components/ConfirmationModal'

function AllData() {
    const {data,admin,fileterData}=useSelector((state)=>state.data)
    const [searchItem,setSearchItem]=useState(null)
    const [visibleModal,setVisibleModal]=useState(false)
    const [id,setId]=useState(null)
    const {filterData}=useSelector((state)=>state.data)
    const dispatch=useDispatch()
    const navigate=useNavigate()


    useEffect(() => {
        const handleBeforeUnload = (event) => {
          event.preventDefault();
          event.returnValue = ''; // Required for some browsers
        };
    
        window.addEventListener('beforeunload', handleBeforeUnload);
    
        return () => {
          window.removeEventListener('beforeunload', handleBeforeUnload);
        };
      }, []);

    function deleteData(e){
        e.preventDefault()
        const cardId=e.target.value;
        setVisibleModal(!visibleModal)
        setId(cardId)
        // deleteCardData(id,navigate)
    }

      console.log("f data: ",fileterData);
  return (


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
                
                <th scope="col" class="px-6 py-3 text-[17px] capitalize" key={title.id}>
                   {title.title}  
                </th>
           
            ))
           } </tr>
        </thead>
        <tbody>
            {
              fileterData ?( fileterData?.map((card)=>(
                 
                <tr class="bg-white border-b text-[15px] dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white capitalize">
                {`${card.name} Vs ${card.secondName}`} 
            </th>
            <td class="px-6 py-4 uppercase">
                {card.nameOfCourt}
            </td>
            <td class="px-6 py-4">
                {card.caseNumber}
            </td>
            <td class="px-6 py-4 capitalize">
                {card.positionStage}
            </td>
            <td class="px-6 py-4">
                {new Date(card.prevDate).toLocaleDateString('en-GB')}
            </td>
            <td class="px-6 py-4">
                {new Date(card.nextDate).toLocaleDateString('en-GB')}
            </td>
            <td class="px-6 py-4 capitalize">
                {card.location}
            </td>
            <td class="px-6 py-4">
                {card.phoneNumber}
            </td>
            {
                admin?(
                    <td class="flex items-center px-6 py-4">
                        <Link to={`/editData/${card._id}`} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                        <button onClick={deleteData} value={`${card._id}`} class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</button>
                </td>
                ):
                (
                  <p>Unauthorized</p>  
                )
            }
        </tr>
            ))):
              (
                !data?(<div className='text-center w-full text-2xl'>No Data</div>):
                ( data?.map((card)=>(
                 
                     <tr class="bg-white border-b text-[15px] dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                         
                 <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white capitalize">
                     {`${card.name} Vs ${card.secondName}`}
                 </th>
                 <td class="px-6 py-4 uppercase">
                     {card.nameOfCourt}
                 </td>
                 <td class="px-6 py-4">
                     {card.caseNumber}
                 </td>
                 <td class="px-6 py-4 capitalize">
                     {card.positionStage}
                 </td>
                 <td class="px-6 py-4">
                     {new Date(card.prevDate).toLocaleDateString('en-GB')}
                 </td>
                 <td class="px-6 py-4">
                     {new Date(card.nextDate).toLocaleDateString('en-GB')}
                 </td>
                 <td class="px-6 py-4 capitalize">
                     {card.location}
                 </td>
                 <td class="px-6 py-4">
                     {card.phoneNumber}
                 </td>
                 {
                     admin?(
                         <td class="flex items-center px-6 py-4">
                             <Link to={`/editData/${card._id}`} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                             <button onClick={deleteData} value={`${card._id}`} class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</button>
                     </td>
                     ):
                     (
                       <p>Unauthorized</p>  
                     )
                 }
             </tr>
                 )))
              )
            }
            
        </tbody>
    </table>

</div>
{visibleModal &&(<ConfirmationModal id={id}/>)}

    </div>
  )
}

export default AllData