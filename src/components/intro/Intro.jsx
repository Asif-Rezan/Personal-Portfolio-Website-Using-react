import React, { useEffect, useRef } from 'react'
import './intro.scss'
import { init } from 'ityped'

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    
    init(textRef.current, { 
      showCursor: true,
      backDelay: 1500,
      backSpeed:60, 
      strings: ['Software Engineer', 'Game Developer' ] })


  }, [])


  return (
    <div className='intro' id='intro'>

     <div className='left'>
       <div className="imageContainer">
         <img src="assets/profile-pic2.png" alt="" />
       </div>
     </div>
     <div className='right'>
       <div className='wrapper'>
         <h2>Hi There, I'm</h2>
         <h1>Md. Shahriar Asif Rezan</h1>
         <h3>Skills <span ref={textRef}></span></h3>

       </div>
       <a href="#portfolio">
       <i class="fas fa-chevron-down fa-2x"></i>
       </a>
     </div>

    </div>
  )
}
