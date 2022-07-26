import {useState} from 'react'

const Login = () => {
 const [formData, setFormData]= useState({
    email:'',
    password:'',
  })

  const { email, password } = formData

  const onChange = (e) => {
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value
    }))}

    const onSubmit = (e) => {
      e.preventDefault()

    }

  return (
    <section className='h-full'>
      <div className='flex justify-center flex-col items-center mt-4'>
      <h1 className='text-2xl'>Welcome back!</h1>
      <p className='text-gray-500'>Log in with email and password</p>
     <form className="w-full max-w-sm mt-10" onSubmit={onSubmit}>
     
       <div className=" mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500   mb-1 md:mb-0 pr-4" for="inline-full-email">
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
          <label className="block text-gray-500 mb-1 md:mb-0 pr-4" for="inline-password">
            Password
          </label>
        </div>
        <div className="md:w-full">
          <input className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black" id="password" type="password" placeholder="Enter password" value={password} onChange={onChange} name='password' required/>
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button className="shadow hover:bg-gray-800 focus:shadow-outline focus:outline-none ml-4 cursor-pointer bg-black rounded-full py-2 px-4 text-white" type="submit">
            Sign in
          </button>
        </div>
      </div>
    </form>
      </div>

    </section>
  )
}

export default Login