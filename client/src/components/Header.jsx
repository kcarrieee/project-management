import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {reset, logout} from '../features/auth/AuthSlice'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user, isSuccess, isError, isLoading, message } = useSelector(state => state.auth)
  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')

  }
  return (
    <header className='flex justify-between py-3 items-center'>
        <div ><Link to={'/'}>Project Desk</Link></div>
        <nav>
            <ul className='flex items-center'>
                {user ? 
                (<>
                  <li className='ml-4 cursor-pointer text-gray-600'><Link to={'/myprojects'}>My projects</Link></li>
                  <li className='ml-4 cursor-pointer bg-black rounded-full py-2 px-4 text-white'><button onClick={onLogout}>Logout</button></li>
                </>) : 
                (<>
                <li className='ml-4 cursor-pointer text-gray-600'><Link to={'/login'}>Log In</Link></li>
                <li className='ml-4 cursor-pointer bg-black rounded-full py-2 px-4 text-white'><Link to={'/register'}>Get Started</Link></li>
                </>)}
            </ul>
        </nav>
    </header>
  )
}

export default Header