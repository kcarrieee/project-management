import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSingleProject, updateProject} from '../features/projects/projectSlice'
import { getNotesData, createNote} from '../features/notes/NoteSlice'
import { useParams, useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner'
import BackBtn from '../components/BackBtn'
import NoteItem from '../components/NoteItem'
import Modal from 'react-modal'

const customStyles = {
  content: {
    width: '600px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    position: 'relative',
  },
}

Modal.setAppElement('#root')





const Project = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [noteText, setNoteText] = useState('')

    const dispatch = useDispatch()
    // eslint-disable-next-line
    const params = useParams()
    const navigate = useNavigate()
    const { projectId } = useParams()
    const { project, isError, isLoading, message } = useSelector(state => state.projects)
     const { notes, isLoading: notesIsLoading } = useSelector(state => state.notes)
    useEffect(() => {
        if(isError){
            alert(message)
        }
        dispatch(getSingleProject(projectId))
        dispatch(getNotesData(projectId))
        // eslint-disable-next-line
    }, [isError, message, projectId]);

    const onProjectStatusChange = () => {
        dispatch(updateProject(projectId))
        navigate('/myprojects')
    }

      // Open/close modal
    const openModal = () => setModalIsOpen(true)
    const closeModal = () => setModalIsOpen(false)

      // Create note submit
    const onNoteSubmit = (e) => {
        e.preventDefault()
        dispatch(createNote({ noteText, projectId }))
        closeModal()
    }

    if(isLoading || notesIsLoading){
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
                {project.status !== 'done' && (
                    <button onClick={openModal} className='text-xs cursor-pointer border border-purple-600 rounded-full py-2 px-4 text-purple-600'>Add a task</button>
                )}
                {project.status !== 'done' && (<button onClick={onProjectStatusChange} className='text-xs cursor-pointer border border-black rounded-full py-2 px-4 text-black'>Finish project!</button>)}
            </div>
            <div>
                {notes.map((note) => (
                    <NoteItem key={note._id} note={note}/>
                ))}
            </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Add Note'
      >
        <h2>Add Note</h2>
        <button className='btn-close' onClick={closeModal}>
          X
        </button>
        <form onSubmit={onNoteSubmit}>
          <div className='form-group'>
            <textarea
              name='noteText'
              id='noteText'
              className='form-control'
              placeholder='Note text'
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
            ></textarea>
          </div>
          <div className='form-group'>
            <button className='btn' type='submit'>
              Submit
            </button>
          </div>
        </form>
      </Modal>
        </section>
    </div>
  )
}

export default Project