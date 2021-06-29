import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonial from "./components/testimonials/Testimonial";
import Contact from "./components/contact/Contact";
import './app.scss'
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() { 
  const [menuOpen, setmenuOpen] = useState(false)
  return (
    <div className="app">

      

      <Topbar menuOpen={menuOpen} setMenuOpen={setmenuOpen}/>
       <Menu menuOpen={menuOpen} setMenuOpen={setmenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonial/>
        <Contact/>
      </div>



      

    </div>
  );
}

export default App;
