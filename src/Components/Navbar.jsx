import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/index.css"
import { useThemeState } from '../Context/ThemeContext';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = ({ toggleTheme, isDark }) => {
  

  return (
    
    <nav>
      {/* <img src="./images/.png" alt='DH-logo' /> */}
      <Link to="/">
        Home
      </Link>
      <Link to="/contact">
        Contacto
      </Link>
      <Link to="/favs">
      Favs
      </Link>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={toggleTheme} toggleTheme= {toggleTheme} isDark={isDark}>
        {isDark ? "🌞 Light Mode" : "🌙 Dark Mode"}  </button>
    </nav>
  )
}

export default Navbar