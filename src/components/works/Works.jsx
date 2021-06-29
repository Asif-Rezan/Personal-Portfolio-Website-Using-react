import React, { useState } from 'react'
import './works.scss'

export default function Works() {

  const [currentSlide, setcurrentSlide] = useState(0)

  const data=[
    {
      id: "1",
      icon: <i class="fab fa-android fa-2x"></i>,
      title: "Mobile App",
      desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta minus porro eum iure officiis illo facere nostrum molestiae aliquid! Quia",
      img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/How_to_Become_a_Back_End_Developer.jpg"

    },
    {
      id: "2",
      icon: <i class="fab fa-android"></i>,
      title: "Unity Game",
      desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta minus porro eum iure officiis illo facere nostrum molestiae aliquid! Quia",
      img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/How_to_Become_a_Back_End_Developer.jpg"

    },
    {
      id: "3",
      icon: <i class="fab fa-android"></i>,
      title: "Web App",
      desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta minus porro eum iure officiis illo facere nostrum molestiae aliquid! Quia",
      img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/How_to_Become_a_Back_End_Developer.jpg"

    }
  ];

  const handleClick=(way)=>
  {
    way==="left" ? setcurrentSlide(currentSlide>0 ? currentSlide-1 :2) :
    setcurrentSlide(currentSlide<data.length-1 ? currentSlide+1 : 0)
  }

  

  return (
    <div className='works' id='works'>
      <div className="slider" style={{transform: `translateX(-${currentSlide*100}vw)`}}>
        {data.map(d=>(

        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
      
                  {d.icon}

                </div>
                <h2>{d.title}</h2>
                <p className='desc'>
                  {d.desc}
                </p>

                <span>Projects</span>

              </div>
            </div>
            <div className="right">
              <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/How_to_Become_a_Back_End_Developer.jpg" alt="" />
            </div>
          </div>
        </div>))}
      </div>

      <i class="fas fa-chevron-left fa-3x arrow left" onClick={()=>handleClick("left")}></i>
      <i class="fas fa-chevron-right fa-3x arrow right" onClick={()=>handleClick()}></i>

    

      
    </div>
  )
}
