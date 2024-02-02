// import { Link } from 'react-scroll';
import { useState } from "react";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faHome, faPhone, faRandom, faVoicemail} from '@fortawesome/free-solid-svg-icons'

function Home() {
  const[menuBar,setMenuBar]=useState(false)
  return (
    <div id="home">
      <br/>
      <div className="image"><img src="download.jpg" id="clone" alt="check"/><img src="img.jpg" alt="check"/></div>
      <div className="image1"><img src="logo192.png" id="clone1" alt="check"/></div>
      <div className="image3"><img src="img3.jpg" alt="check"/></div>
      <div className="image2"><img src="img2.png" alt="check"/></div>
      
      <div className="content">
      <section className="body">
    <div id="icon"  >
        <div id="icon-set" onClick={()=>{
        setMenuBar(!menuBar);
        }}><img src='framework.jpg'/></div>
        <ul className={menuBar ? "open" : ""}>
         <li  id='menu-phone'><img src="logo512.png" alt="react"/></li>
         <li id='menu-git'><img src="flask.jpg" alt="react"/></li>
         <li id='menu-insta'><img src="html&css.png" alt="react"/></li>
        </ul>   
    </div>
    </section>
       <h1>ABOUT AS:</h1>
       <p><li>I,m a Frontend web Developer to create a website using Framework or without using Framework</li></p>
       <p><li>The Frameworks are:</li></p>
       <p><ol >
        <div className="frame">
        <div className="frame-box">
          <div className="react-frame">
             <img src="logo512.png" alt="react"/>
          </div>
          <h3>REACT</h3></div>
          <div className="frame-box">
          <div className="flask-frame">
             <img src="flask.jpg" alt="flask"/>
          </div>
          <h3>FLASK</h3></div>
          <div className="frame-box">
          <div className="html-css-frame">
             <img src="html&css.png" alt="html&css"/>
          </div>
          <h3>HTML&CSS</h3>
        </div>
        </div>
       </ol></p>
      <p><li>I will create a singe page or multipage like Responsive website</li></p>
      </div>
      <br/><br/><br/><div className="tin">
      <h1>FRAMEWORKS USING FOR WEBSITES</h1><br/><br/>
      <div className="packet">
          <br/>
          <div className="surface">
            <div className="home"><img src="logo512.png" alt="check"/></div>
            <h1>REACT</h1>
            <p>React is a javascript based framework and <br/>It is a MERN stack development </p>
          <div className="inner"><img src="star.png" alt="check"/></div>
          </div>

          <div className="surface1">
            <div className="home1"><img src="flask.jpg" alt="check"/></div>
            <h1>FLASK</h1>
            <p>Flask is a python based framework and <br/>It is easy to develop a website </p>
            <div className="inner2"><img src="python.png" alt="check"/></div>
            </div>

          <div className="surface2">
            
            <div className="home2"><img src="html&css.png" alt="check"/></div>
            <h1>HTML&CSS</h1>
            <p>Html & css is used to develop a website<br/> without framework </p>
          <div className="inner1"><img src="html.png" alt="check"/></div>
          </div>
          </div></div>
          </div>
  );
}

export default Home;