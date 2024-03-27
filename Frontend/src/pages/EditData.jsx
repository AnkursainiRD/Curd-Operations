import React, { useDebugValue, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { editCardData, searchData } from '../services/operations/DataOperations';
import { courtNames, tehsil } from '../data/tableTitles';
import { useDispatch, useSelector } from 'react-redux';
import { findData } from '../slice/dataSlice';
import {toast} from 'react-hot-toast';

function EditData() {
  const {register,handleSubmit,reset,formState:{errors}}=useForm()
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {id}=useParams()
  const [cardId,setCardId]=useState(id)
  const {foundData,data}=useSelector(state=>state.data)
 
  useState(()=>{
    console.log(id);
    dispatch(findData(id))
    
  },[])

  
  console.log("find data:",foundData);


  function updateEditData(fourmData,id){
    console.log(cardId);
    if(fourmData.prevDate && data.nextDate==""){
      fourmData.prevDate=editCard.prevDate
      fourmData.nextDate= editCard.nextDate
      console.log(editCard.prevDate);
    }
    console.log(fourmData);
    let result=data.find(obj=>obj.caseNumber== fourmData.caseNumber)
      if(!result)
      {
        fourmData.cardId=cardId
        editCardData(fourmData,navigate,dispatch)  }
      else{
        toast.error("Case Number already exists!")
      }
    
  };

  const registerWithLowercase = (name,options) => {
    return register(name, {
      setValueAs: value => value.toLowerCase(), 
      ...options
    });
  };


  
console.log(foundData);
  return (
    <div className='w-full h-full flex flex-col justify-center items-center gap-6'>
      
      <h1 className='font-bold text-2xl'>Edit Data</h1>
        <form class="w-96 lg:w-2/4 font-bold mx-auto" onSubmit={handleSubmit(updateEditData)}>
          
        <div className='lg:flex lg:flex-row flex-col lg:gap-2'>
  <div class="relative z-0 w-full mb-5 group">
      <input type="text" name="name" id="name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer capitalize" placeholder=" " {...registerWithLowercase("name",{ required: 'First name is required' })} defaultValue={foundData?.name}/>
      {errors.name && <p className="text-red-400">Name is required.</p>}
      <label for="name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="text" name="secondName" id="secondName" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer capitalize" placeholder=" " {...registerWithLowercase("secondName",{ required: 'Second name is required' })} defaultValue={foundData?.secondName}/>
      {errors.name && <p className="text-red-400">Second Name is required.</p>}
      <label for="secondName" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Second Name</label>
  </div>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <select type="text" name="nameOfCourt" id="nameOfCourt" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...registerWithLowercase("nameOfCourt",{ required: 'Court name is required' })}>
         {
           courtNames?.map((court)=>(
            court.value==foundData.nameOfCourt?( <option selected value={court.court} key={court.id}>{court.court}</option>):(
            <option value={court.value} key={court.id}>
              {court.court}
            </option>
              ))
           )
         }
      </select>
      {errors.name && <p>Court Name is required.</p>}
      <label for="nameOfCourt" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Court Name</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="text" name="positionStage" id="positionStage" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer capitalize" placeholder=" " {...registerWithLowercase("positionStage",{ required: 'Position stage is required' })} defaultValue={foundData?.positionStage}/>
      <label for="positionStage" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Positoin State</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <select defaultChecked={foundData?.location} type="select" name="location" id="location" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer capitalize" placeholder=" " {...registerWithLowercase("location",{ required: 'Tehsil is required' })} >

        {tehsil?.map((city)=>(
           city.city==foundData.location ?( <option selected value={city.value} key={city.id}>
            {city.city}
        </option>):
        (
          <option value={city.value} key={city.id}>
          {city.city}
      </option>
        )
          ))}
      </select>
      <label for="location" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tehsil</label>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="caseNumber" id="caseNumber" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("caseNumber",{required:true})}  defaultValue={foundData?.caseNumber}/>
        <label for="caseNumber" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Case Number</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input type="number" name="phoneNumber" id="phoneNumber" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("phoneNumber",{required:true,maxLength:10})} defaultValue={foundData?.phoneNumber}/>
        <label for="phoneNumber" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
    </div>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-5 group">
        <input type="date" name="prevDate" id="prevDate" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder={new Date(foundData?.prevDate ).toLocaleDateString('en-US')} {...register("prevDate")}  defaultValue={new Date(foundData?.prevDate ).toLocaleDateString('en-US')}/>
        <label for="prevDate" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Previous Date</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input type="date" name="nextDate" id="nextDate" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("nextDate")} defaultValue={foundData?.nextDate}/>
        <label for="nextDate" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Next Date</label>
    </div>
  </div>
  <div className='flex items-center'>
  <button type="submit"  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
     <Link to={"/getAllData"} className='ml-9 bg-blue-700 py-2 px-5 rounded-lg text-white'>Back</Link>   
  </div>
      </form>
    </div>
  )
}

export default EditData