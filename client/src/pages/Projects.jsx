import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getProject, reset } from '../features/projects/projectSlice'
import Spinner from '../components/Spinner'
import ProjectItem from '../components/ProjectItem'
import BackBtn from '../components/BackBtn'
import CreateBtn from '../components/CreateBtn'


const Projects = () => {
    const { 
        projects,
        isError,
        isSuccess,
        isLoading,
       } = useSelector((state) => state.projects)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getProject())

        return () =>{
            if(isSuccess){
                dispatch(reset())
            }
        }
    },[dispatch,isSuccess])

    if(isLoading){
        return <Spinner/>
    }
  
  return (
    <>
    <section className='mt-6'>
       <div className='flex justify-between items-end'> <h1 className='text-4xl'>Projects</h1> 
       <div >
    <div className=" xl:w-96">
    <input
      type="search"
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      placeholder="Search for a project"
    />
  </div>
</div>
       </div>
        {projects.length === 0 ? (<div className='mt-10'>No projects yet</div>): null}
      <div className="grid mt-6 grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {projects.map((project)=>(
                <ProjectItem project={project} key={project._id}/>
            ))}
        </div>
        
    </section>
    <CreateBtn/>
    </>
  )
}

export default Projects