import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex justify-between py-3 items-center'>
        <div ><Link to={'/'}>Project Desk</Link></div>
        <nav>
            <ul className='flex items-center'>
                <li className='ml-4 cursor-pointer text-gray-600'><Link to={'/login'}>Log In</Link></li>
                <li className='ml-4 cursor-pointer bg-black rounded-full py-2 px-4 text-white'><Link to={'/register'}>Get Started</Link></li>
                {/* <li className='ml-4 cursor-pointer'><Link to={'/'}>Profile</Link></li> */}
            </ul>
        </nav>
    </header>
  )
}

export default Header