import { Link } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'

const Narbar = () => {
  return (
    <div className="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie /> MoviesLib{' '}
        </Link>
      </h2>
      <form>
        <input type="text" placeholder="Busque um filme" />
        <button type="submit">          
          <BiSearchAlt2 />
        </button>
      </form>
    </div>
  )
}

export default Narbar
