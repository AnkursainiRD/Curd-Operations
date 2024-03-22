import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginAdmin } from '../services/operations/DataOperations'

function Login() {
    const [showPassword,setShowPassword]=useState(false)
    const {register,handleSubmit,formState:{errors}}=useForm()
    const navigate=useNavigate()
    const dispatch=useDispatch()

    function loginUser(data){
        console.log(data);
        loginAdmin(data,navigate,dispatch)
    }
  return (
    <div className='w-full h-full flex flex-col justify-center'>
        <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          Login
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Log in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit(loginUser)}>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Admin email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" {...register("email",{required:true})}/>
                      {errors.email && <p className='text-red-500'>Please enter email</p>}
                  </div>
                  <div className='relative'>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Admin Password</label>
                      <input type={`${showPassword?("text"):("password")}`} name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("password",{required:true})}/>
                      <p onClick={()=>setShowPassword(prev=>!prev)} className='absolute right-2 top-10 lg:top-9 lg:right-3 cursor-pointer '>{showPassword?("Hide"):("Show")}</p>
                     {errors.password && <p className='text-red-500'>Please enter password</p>}
                  </div>
                  <div class="flex items-center justify-between">
                  </div>
                  <button type="submit" class="w-full text-white dark:text-black bg-gray-500 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                 
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}

export default Login