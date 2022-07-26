import React from 'react'
import {Link} from 'react-router-dom'
import {IoCreateOutline} from 'react-icons/io5'

const Home = () => {
  return (
    <section className='w-full h-screen text-center'>
      <h1 className='text-4xl mb-4 mt-4 w-1/2 mx-auto '>Project management software that gives you a way to organize projects</h1>
      <div className='flex justify-center items-center'>
      <Link to={'/new-project'} ><button className='shadow hover:bg-gray-800 focus:shadow-outline focus:outline-none ml-4 cursor-pointer bg-black rounded-full py-2 px-4 text-white flex items-center '><IoCreateOutline className='mr-2'/> Create</button> </Link>
      <Link to={'/projects'} className=' focus:outline-none ml-4 cursor-pointer border-black border rounded-full py-2 px-4'>View my projects</Link>
      </div>
    </section>
  )
}

export default Home