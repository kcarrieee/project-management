import {Link} from 'react-router-dom'

const images = ['design', 'dev', 'learning', 'other']

const ProjectItem = ({project}) => {

  return (
              <div className="mt-4 flex justify-between shadow-lg rounded-lg p-10 h-60 ">
                <p>{ project.theme === "Design" ? images[0] : null }
                    { project.theme === "Development" ? images[1] : null }
                    { project.theme === "Learning" ? images[2] : null }
                    { project.theme === "Other" ? images[3] : null }</p>
                <div>
                  <h2 className="text-xl text-black">
                      {project.theme}
                  </h2>
                  <p className="mt-1 text-xs text-gray-400">{new Date(project.createdAt).toLocaleString('en-US')}</p>
                  <p className="mt-1 text-m text-gray-600">{project.description}</p>
                </div>
                <p className="text-sm font-medium text-green-500">{project.status}</p>
              </div>
  )
}

export default ProjectItem