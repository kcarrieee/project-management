import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSingleProject, updateProject} from '../features/projects/projectSlice'
import { useParams, useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner'
import BackBtn from '../components/BackBtn'



const Project = () => {

    const dispatch = useDispatch()
    // eslint-disable-next-line
    const params = useParams()
    const navigate = useNavigate()
    const { projectId } = useParams()
    const { project, isError, isLoading, message } = useSelector(state => state.projects)
    useEffect(() => {
        if(isError){
            alert(message)
        }
        dispatch(getSingleProject(projectId))
        // eslint-disable-next-line
    }, [isError, message, projectId]);

    const onProjectStatusChange = () => {
        dispatch(updateProject(projectId))
        navigate('/myprojects')
    }

    if(isLoading){
        return <Spinner/>
    }

    if(isError){
        return <h2>Something went wrong...</h2>
    }

  return (
    <div> 
        <BackBtn url='/myprojects'/>
        <section className='mt-4 flex flex-col  shadow-lg rounded-lg py-10 transition-all px-10' >
            <div className='flex justify-between items-center mb-4'>
                <h2> <span className='font-bold'>Theme: </span> {project.theme}</h2>
                <p className='text-sm font-medium text-red-400 h-fit'>{project.status}</p>
            </div>
            <div className='pb-4'>
                {project.description}
            </div>
            <hr className='pt-4'/>
            <div className='flex justify-between items-center mb-4'>
                <p>Add a note</p>
                {project.status !== 'done' && (<button onClick={onProjectStatusChange} className='text-xs cursor-pointer border border-black rounded-full py-2 px-4 text-black'>Finish project!</button>)}
            </div>
        </section>
    </div>
  )
}

export default Project