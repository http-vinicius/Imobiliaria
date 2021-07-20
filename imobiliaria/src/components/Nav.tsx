import { Link } from 'react-router-dom'
import '../styles/navegation.scss'

export function Nav() {
  return (

    <header className="nav-container">
      <div className="nav-container-menu">
        <Link className='brand' to="/"><h1>Logo</h1></Link>
        <nav>
          <Link className='link' to="/"><h3>Home</h3></Link>
          <Link className='link' to="/"><h3>Imóveis</h3></Link>
          <Link className='link' to="/"><h3>Sobre</h3></Link>
          <Link className='link' to="/"><h3>Contato</h3></Link>
        </nav>
      </div>
    </header>
  )
}