import { useNavigate } from 'react-router-dom'

const CreateBtn = () => {
  const navigate = useNavigate()
  return (
    <button onClick={() =>  navigate('/create')}className='shadow hover:bg-gray-800 focus:shadow-outline focus:outline-none cursor-pointer  bg-black py-4 px-6 rounded-full text-white fixed right-8 bottom-8 '>+</button> 
  )
}

export default CreateBtn