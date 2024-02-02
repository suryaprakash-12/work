import { useState } from "react"
import axios from 'axios'

export default function Contact() {
  const[name,setName]=useState()
  const[email,setEmail]=useState()
  const[password,setPassword]=useState()
  

  const Submit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/register',{name,email,password})
    .then(result=>console.log(result))
    .catch(err=>console.log(err))
  }
  return (
    <div id='contact'>
        <div className="container1">
          <h1>If you want a website like single page or responsive website,</h1>
          <h1>I will create website using react</h1>
          <div className="content1">
            <div className="content2">
            <i className="fa fa-home" aria-hidden="true">
            </i></div></div>
          <div className="model">
            <h4>Address</h4>
            <p>2/140,vaniyampatti,vaniyangadu,
              <br/>pattamangalam,thiruppathur-sivaganga</p>
          </div>
          <div className="content3">
            <div className="content4">
            <i className="fa fa-solid fa-phone" aria-hidden="true">
            </i></div></div>
          <div className="model1">
            <h4>Phone</h4>
            <p>+91 9345554762</p>
          </div>
          <div className="content5">
            <div className="content6">
            <i className=" fa fa-sharp fa-solid fa-envelope" aria-hidden="true">
            </i></div></div>
          <div className="model2">
            <h4>Gmail</h4>
            <p>sonydoni73@gmail.com</p>
          </div>
          <div className="content7">
            <div className="content8">
            <i className=" fa  fa-instagram" aria-hidden="true">
            </i></div></div>
          <div className="model3">
            <h4>Instagram</h4>
            <p>so.ny9022</p>
          </div>
        <br/>
      <form className="form" onSubmit={Submit}><div className="box">
        <label htmlFor="name"><strong>Name:</strong></label><br />
        <input type="text" id="name" 
        name="name" required
         placeholder="type here"
         onClick={(e)=>setName(e.target.value)}
         /><br /><br/>
        <label htmlFor="email"><strong>Email Address:</strong></label><br />
        <input type="email" id="email" 
        name="email"
         required 
        placeholder="type here" 
        onClick={(e)=>setEmail(e.target.value)}
        /><br /><br/>
        <label htmlFor="password"><strong>password:</strong></label><br/>
        <input type='text' id='pass' name='password' placeholder="type here"
        onClick={(e)=>setPassword(e.target.value)}/><br/><br/>
        <input type='submit' value="button" id="btn"/></div>
      </form>
      </div>
    </div>
  )
}

