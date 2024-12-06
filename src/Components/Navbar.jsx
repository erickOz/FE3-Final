import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/index.css"
import { useDentistState } from '../Context/GlobalContext';


const Navbar = () => {
  const { state, dispatch } = useDentistState(); 

  const handleThemeToggle = () => {
    dispatch({ type: "TOGGLE_THEME" }); 
  };
  return (
    
    <nav>

      <Link to="/">
        Home
      </Link>
      <Link to="/contact">
        Contacto
      </Link>
      <Link to="/favs">
      Favs
      </Link>
  
      <button onClick={handleThemeToggle}>
        {state.theme ? "🌙 Dark Mode" : "🌞 Light Mode"}
        </button>

    </nav>
  )
}

export default Navbar