import {Link} from 'react-router-dom'

const BackBtn = ({url}) => {
  return (
    <Link to={url}>Go back</Link>
  )
}

export default BackBtn