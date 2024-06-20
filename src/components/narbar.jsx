import { Link, useNavigate } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'
import { useState } from 'react'

import './navbar.css'

const Narbar = () => {
  const [search, setSearch] = useState('')
  const navegate= useNavigate()  /* estabelece funções de redirecionamento */

  const handleSubmit = (e) =>{
    e.preventDefault()  // vai parar o envio do formulario, aborta as funções defaut 
    
    if(!search) return  // não redireciona sem ter nada dentro do input

    navegate(`/search?q=${search}`) // busca no query na api o que foi digitado no input
    setSearch('')  // limpando o campo    
  }

  return (
    <div className="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie /> MoviesLib
        </Link>
      </h2>
      <form  onSubmit={handleSubmit}  >
        <input
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search} /* faz zerar o input depos que renderiza */
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </div>
  )
}

export default Narbar
