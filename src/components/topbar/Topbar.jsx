import React from 'react'
import './Topbar.scss'
import {Person,Mail} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
  return ( 
    <div className={"topbar "+(menuOpen && "active")}>  
      <div className='wrapper'> 
        <div className='left'>
          <a href="#intro" className='logo'> REZAN.</a>

          <div className='itemContainer'>
            <Person className='person icon'/>
            <span>+88 01703334975</span>
          </div>
          <div className='itemContainer'>
            <Mail className='mail icon'/>
            <span>shahriarasif753@gmail.com</span> 
          </div>

        </div>

        <div className='right'>
          <div className="humburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
      
    </div>
  )
}
