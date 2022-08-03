import {Link} from 'react-router-dom'
import designImg from '../assets/svg1.svg'
import devImg from '../assets/svg2.svg'
import learnImg from '../assets/svg3.svg'
import otherImg from '../assets/svg4.svg'


const images = [designImg, devImg , learnImg , otherImg ]

const ProjectItem = ({project}) => {

  return (
              <div className="mt-4 flex flex-col  shadow-lg rounded-lg py-10 transition-all px-10 hover:border border-black">
                <div className='flex justify-between mb-4'>
                    { project.theme === "Design" ? <img src={images[0]} className='w-16 rounded-md bg-blue-500' alt="" /> : null }
                    { project.theme === "Development" ? <img src={images[1]} className='w-16 rounded-md bg-blue-500' alt="" /> : null }
                    { project.theme === "Learning" ? <img src={images[2]} className='w-16 rounded-md bg-blue-500'  alt="" /> : null }
                    { project.theme === "Other" ? <img src={images[3]} className='w-16 rounded-md bg-blue-500' alt="" /> : null }
                    <p className="text-sm font-medium text-red-400 h-fit ">{project.status}</p>
                  </div>
                <div>
                  <div className='flex justify-between items-center'>
                  <h2 className="text-lg text-black">
                      {project.theme}
                  </h2>
                  <p className="mt-1 text-xs text-gray-400">{new Date(project.createdAt).toLocaleDateString()}</p>
                  </div>
                  <p className="mt-1 text-xs text-gray-600 mb-4 cut-text">{project.description}</p>
                  <Link to={`/myproject/${project._id}`} className='text-white bg-black py-2 px-4 rounded-md text-xs'>Open project</Link>
                </div>
              </div>
  )
}

export default ProjectItem