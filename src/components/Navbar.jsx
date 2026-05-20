import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar" aria-label="Navegação">
      <div className="navbar__links">
          <NavLink to="/">Início</NavLink>
          <NavLink to="/pokemon">Pokémon</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
