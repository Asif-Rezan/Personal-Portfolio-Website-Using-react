import React, { useEffect, useState } from 'react'
import './portfolio.scss'
import PortfolioList from '../PortfolioList/PortfolioList'
import { featuredPortfolio } from '../../data';
import { webPortfolio } from '../../data';
import { mobileAppPortfolio } from '../../data';
import { unityGamePortfolio } from '../../data';

export default function Portfolio() {

  const [selected, setSelected] = useState("featured");
  const [data, setdata] = useState([]) 


  const list=[
   { id: "featured",
    title: "Featured"
  },
  {
    id: "web",
    title: "Web App"
  },
  {
    id: "mobile",
    title: "Mobile App"
  },

  {
    id: "unity game",
    title: "Unity Game"
  }

  ];


  useEffect(() => {
   switch(selected)
   {
     case "featured":
       setdata(featuredPortfolio);
       break;
       case "web":
        setdata(webPortfolio);
        break;
        case "mobile":
       setdata(mobileAppPortfolio);
       break;
       case "unity game":
       setdata(unityGamePortfolio);
       break;
       default:
         setdata(featuredPortfolio);
   }


  }, [selected])


  return (
    <div className='portfolio' id='portfolio'>
     <h1>Portfolio</h1>
     <ul>
       {list.map(item=>(
         <PortfolioList title={item.title} active={selected===item.id} setSelected={setSelected} id={item.id}/>
       ))}
      
     </ul>
     <div className="container">

       {data.map((d)=>(

          <div className="item">
          <img src={d.img} alt="" />
          <h3>{d.title}</h3>
          </div>
         
       ))}

       
       

     </div>
    </div>
  )
}
