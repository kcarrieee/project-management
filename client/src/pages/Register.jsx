import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { register, reset} from '../features/auth/AuthSlice'
import {useNavigate} from 'react-router-dom'
import Spinner from '../components/Spinner'

const Register = () => {

  const [formData, setFormData]= useState({
    name:'',
    email:'',
    password:'',
    password2:''
  })
  const [isValid, setIsValid]= useState(false)
  const navigate = useNavigate()
  const { name, email, password, password2 } = formData

  const dispatch = useDispatch()
  const { user, isSuccess, isError, isLoading, message } = useSelector(state => state.auth)


  useEffect(()=>{
    if(isError){
      alert(message)
    }
    //redirect when logged in
    if(isSuccess || user){
      navigate('/')

    }
    dispatch(reset())

  },[user, isSuccess, isError, message , navigate, dispatch])
  
  const onChange = (e) => {
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value
    }))}

    const onSubmit = (e) => {
      e.preventDefault()

      if(password !== password2){
        setIsValid(!isValid)
      }else{
        const userData = {
          name,
          email,
          password
        }

        dispatch(register(userData))
      }
    }
    if(isLoading) {
      return <Spinner/>
    }

  return (
    <section className='h-full'>
      <div className='flex justify-center flex-col items-center mt-4'>
      <h1 className='text-2xl'>Register now!</h1>
      <p className='text-gray-500'>Please create an account</p>
     <form className="w-full max-w-sm mt-10" onSubmit={onSubmit}>
      <div className=" mb-6">
        <div className="w-1/3">
          <label className="block text-gray-500 mb-1 " htmlFor="name">
            Full Name
          </label>
        </div>
        <div className="md:w-full">
          <input className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black" id="name" type="text" placeholder="Name" value={name} onChange={onChange} name='name' required
          />
        </div>
      </div>
       <div className=" mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500   mb-1 md:mb-0 pr-4" htmlFor="email">
            Email
          </label>
        </div>
        <div className="md:w-full">
          <input className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black" id="email" placeholder="Email" type="email" value={email} onChange={onChange} name='email' required
          />
        </div>
      </div>
      <div className=" mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 mb-1 md:mb-0 pr-4" htmlFor="password">
            Password
          </label>
        </div>
        <div className="md:w-full">
          <input className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black" id="password" type="password" placeholder="Enter password" value={password} onChange={onChange} name='password' required/>
        </div>
      </div>
       <div className=" mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 mb-1 md:mb-0 pr-4" htmlFor="password2">
            Password 
          </label>
        </div>
        <div className="md:w-full">
          <input className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black" id="password2" type="password" placeholder="Confirm password" value={password2} onChange={onChange} name='password2' required/>
        </div>
        {isValid && <p className='text-red-600 text-xs mt-2'>Passwords do not match</p>}
      </div>

      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button className="shadow hover:bg-gray-800 focus:shadow-outline focus:outline-none ml-4 cursor-pointer bg-black rounded-full py-2 px-4 text-white" type="submit">
            Sign Up
          </button>
        </div>
      </div>
    </form>
      </div>

    </section>
  )
}

export default Register