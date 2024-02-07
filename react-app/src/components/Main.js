import { useState } from "react";
import {AnimationOnScroll } from 'react-animation-on-scroll';
function Main() {
    const[menuBar,setMenuBar]=useState(false)
    return (
      <div id="Main">
        <br/><br/><br/><br/>
            <h1 style={{color:"skyblue", paddingLeft:"45%"}}>welcome</h1>
        <div id="main-logo" onClick={()=>{
        setMenuBar(!menuBar);
        }}><div className="step"><img src='surya/surya.png'/></div></div>
            <br/>
            <div className={menuBar ? "check" : ""}  id="navlist">
                <div className="set-of-frame">
                <AnimationOnScroll animateIn="animate__flip"> 
                <div className="skill-react">
                <div className="skill-container">
                <div className="skills-box">
                            <div style={{paddingLeft:"135%",color:"skyblue"}} className="skills-header">
                                <h2>DATABASE</h2>
                            </div>
                            <div className="skills-list">
                                <ol>
                                <h3><li className="font">Database</li></h3>
                                <h3><li>REACT</li></h3>
                                <li>MONGODB</li>
                                </ol>
                            </div>
                        </div>
                        <div className="skill-box">
                            <div className="skills-list">
                                <ol>
                                <h3><li className="font">Database</li></h3>
                               <h3><li>FLASK</li></h3>
                                <li>EXECL-SHEET</li>
                                <li>MYSQL</li>
                                </ol>
                            </div>
                        </div>
                        <div className="skill-box">
                            <div className="skills-list">
                                <ol>
                                <h3><li className="font">Database</li></h3>
                                <h3><li>HTML&CSS</li></h3>
                                <li>EXECL-SHEET</li>
                                <li>MYSQL</li>
                                </ol>
                            </div>
                        </div>
                        </div>
                       
    <div className="card">
       <div className="wrapper">
        <img src="logo512.png" alt="check"  className="card-logo"/>
       </div>
       <img src="logo512.png" alt="check"  className="card-logo1"/>
       <img src="surya.png" alt="check"  className="card-logo2"/>
    </div>
    </div>
</AnimationOnScroll>
    <AnimationOnScroll animateIn="animate__flip"> 
    <div className="skill-flask">
    <div className="skill-container">
    <div className="skills-box">
    <div style={{paddingLeft:"135%",color:"skyblue"}} className="skills-header">
                                <h2>Frontend</h2>
                            </div>
                            <div className="skills-list">
                                <ol>
                                <h3><li className="font">Frontend</li></h3>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <h3><li className="font">Backend</li></h3>
                                <li>PHP</li>
                                </ol>
                            </div>
                            </div>
                            
                        <div className="skill-box">
                            <div className="skills-list">
                                <ol>
                                <h3><li className="font">Frontend</li></h3>
                                <li>FLASK</li>
                                <li>HTML&CSS</li>
                                <li>JavaScript</li>
                                <h3><li className="font">Backend</li></h3>
                                <li>PHP</li>
                                </ol>
                            </div>
                        </div>
                        <div className="skill-box">
                            <div className="skills-list">
                                <ol>
                                <h3><li className="font">Frontend</li></h3>
                                <li>REACT</li>
                                <h3><li className="font">Backend</li></h3>
                                <li>NODE & EXPRESS</li>
                                </ol>
                            </div>
                        </div>
                       </div> 

    <div className="card">
       <div className="wrapper">
        <img src="surya/surya3.jpg" alt="check"  className="card-logo"/>
       </div>
       <img src="surya/surya2.jpg" alt="check"  className="card-logo1"/>
       <img src="surya/surya.png" alt="check"  className="card-logo2"/>
    </div>
   </div>
   </AnimationOnScroll>
   <AnimationOnScroll animateIn="animate__fadeIn"> 
    <div className="skill-html">
        <div className="skill-container">
    <div className="skill-set">
    <div style={{paddingLeft:"135%",color:"skyblue"}} className="skills-header">
                                <h2>TOOLS</h2>
                            </div>
                            <div className="skills-list">
                                <ol>
                                <h3><li className="font">Tools</li></h3>
                                <li></li>
                                </ol>
                            </div>
                        </div>
                        </div>
    <div className="card">
       <div className="wrapper">
        <img src="logo512.png" alt="check"  className="card-logo"/>
       </div>
       <img src="logo512.png" alt="check" className="card-logo1"/>
       <img src="logo512.png" alt="check"  className="card-logo2"/>
    </div>
    </div></AnimationOnScroll>
    </div>
           </div>
            </div>
    );
  }
  
  export default Main;