import React from 'react'
import Form from '../Components/Form'
import "../Styles/form.css"


const Contact = () => {
  return (
    <div className='contact-container'>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact