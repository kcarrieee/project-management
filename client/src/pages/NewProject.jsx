import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createProject, reset } from '../features/projects/projectSlice'
import Spinner from '../components/Spinner'
import BackBtn from '../components/BackBtn'

const NewProject = () => {

    const user = useSelector((state) => state.auth.user)
    const { 
        isError,
        isSuccess,
        isLoading,
        message } = useSelector((state) => state.projects)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [name] = useState(user.name)
    const [email] = useState(user.email)
    const [theme, setTheme] = useState('Development')
    const [description, setDescription] = useState('')


    const onSubmit =(e)=>{
        e.preventDefault()
        console.log(theme, description)
        dispatch(createProject({theme, description}))
    }

    useEffect(() => {
       if(isError){
        alert(message)
       }
       if(isSuccess){
        dispatch(reset())
        navigate('/myprojects')
       }
        dispatch(reset())
    }, [isError, isSuccess, dispatch, navigate, message]);


    if(isLoading){
        return <Spinner/>
    }
  return (
        <section>
          <BackBtn url='/'/>
            <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-4xl mb-4 font-medium leading-6 text-gray-900">Create a new project</h3>
              <p className="mt-1 text-sm text-gray-600">Be descriptive with your project, it will help you in a long run.</p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={onSubmit}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        First name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 p-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={name}
                        disabled
                        
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="mt-1 focus:ring-indigo-500 p-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        disabled
                        value={email}
                      />
                    </div>

                    

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Project type
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={theme}
                        onChange={(e) => setTheme(e.target.value)}
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option value='Design'>Design</option>
                        <option value='Development' >Development</option>
                        <option value='Learning'>Learning</option>
                        <option value='Other'>Other</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="desc" className="block text-sm font-medium text-gray-700">
                        Project description
                      </label>
                      <textarea
                        type="text"
                        name="desc"
                        id="desc"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-1 focus:ring-indigo-500 h-20 p-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300  rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
            
        </section>
  )
}

export default NewProject