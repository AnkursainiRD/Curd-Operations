import React, { useEffect, useState } from 'react'
import { tableTitle } from '../data/tableTitles'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function TodayData({data}) {
    const [todayData,setTodayData]=useState([])
    const [tehsil,setTehsil]=useState("")
    const [filterData,setFilterData]=useState(null)
    const currentDate = new Date().toLocaleDateString('en-GB');
    const {admin}=useSelector(state=>state.data)
    
    function handleChange(e){
        const city=JSON.stringify(e.target.value)
        const res=todayData.filter((card)=>card.location==e.target.value)
        setTehsil(res);
        
    console.log(todayData);
    }   

    function checkDate(){
        let matchCard=[]
        data.map((card)=>{
            if( new Date(card.nextDate).toLocaleDateString('en-GB')===currentDate){
                matchCard.push(card)
                setTodayData(matchCard)
            }
        })
    }
 
    if(todayData.length===0){
        checkDate()
    }
  return (
    <div>
        
    <div className='flex w-full justify-center gap-3 text-2xl mb-10 items-center'>
        <label htmlFor="sardhana">Sardhana</label>
        <input onChange={handleChange} type="radio" name='tehsil' id='sardhana' value="sardhana"></input>
        <label htmlFor="meerut">Meerut</label>
        <input onChange={handleChange} type="radio" name='tehsil' id='meerut' value="meerut"></input>
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">

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
               !tehsil?(<div className='flex w-full text-2xl'>Select Tehsil</div>):
               ( tehsil?.map((card)=>(
                  
                   <tr key={card.id} class="bg-white border-b text-[15px] dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                     {console.log(tehsil)}   
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
                    </td>
                    ):
                    (
                      <p>Unauthorized</p>  
                    )
                }
                        </tr>)
                  
                    
                ))
            }
            
        </tbody>
    </table>
    </div>
    </div>
  )
}

export default TodayData