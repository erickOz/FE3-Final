import React from 'react'
import "../Styles/index.css"

const Footer = () => {
  return (
    <footer>
        <div className='logoFoot' >
        <p>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' />
        </div> 
        <div className='redes'> 
        <img src="./images/ico-facebook.png" alt="Facebook" />
        <img src="./images/ico-instagram.png" alt="Instagram" />
        <img src="./images/ico-tiktok.png" alt="Tiktok" />
        <img src="./images/ico-whatsapp.png" alt="Whatsapp" />
        </div>

    </footer>
  )
}

export default Footer
