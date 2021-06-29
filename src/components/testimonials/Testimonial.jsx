import React from 'react'
import './testimonial.scss'

export default function Testimonial() {

  const data=[
    {
      id: 1,
      neme: " Asif Rezan",
      title: "CEO OF REZAN",
      img: "https://avatars.githubusercontent.com/u/44952569?v=4",
      icon:  <i class="fab fa-youtube fa-2x right"></i>,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, libero." 
      
    },
    {
      id: 2,
      neme: " Rezan",
      title: "CEO OF REZAN",
      img: "https://avatars.githubusercontent.com/u/44952569?v=4",
      icon:  <i class="fab fa-youtube fa-2x right"></i>,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, libero." ,
      featured: true,
      
    },
    {
      id: 3,
      neme: "Shahriar Asif",
      title: "CEO OF REZAN",
      img: "https://avatars.githubusercontent.com/u/44952569?v=4",
      icon:  <i class="fab fa-youtube fa-2x right"></i>,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, libero." 
      
    }
  ]



  return (
    <div className='testimonial' id='testimonial'>
      <h1>Testimonials</h1>
      <div className="container">

        {data.map(d=>(

      
        <div className={d.featured ? " card featured " : "card"}>

          <div className="top">
          <i class="fas fa-arrow-right fa-2x left user"></i>
          <img className='user' src={d.img} alt="" />
          {d.icon}
          </div>
          <div className="center">
           {d.desc}
          </div>
          <div className="bottom">
            <h3>{d.neme}</h3>
            <h4>{d.title}</h4>
          </div>

        </div>
         ))}






      </div>
    </div>
  )
}
