import React from 'react'
import '../Path/Contact.css'

export default function Contact() {
  return (
    <div className='contact'>
      <h1>Contact Us</h1>
      <form>
        <label for="email">Email:</label>
        <input type='email' id='email' name='email' placeholder='Enter your email' required></input>
        <br/>
        <label for="phone">Phone:</label>
        <input type='tel' id='phone' name='phone' placeholder='Enter your Phone Number' required></input>
        <br/>
        <label for='comment'>Comment:</label>
        <textarea type='text' id='comment' name='comment' placeholder='Enter your comment' required></textarea>
        <br/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
