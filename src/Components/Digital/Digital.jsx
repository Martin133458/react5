import React, {useState} from 'react'
import './Digital.scss'

const Digital = () => {

    const [active, setActive] = useState(false)

    const toggleBurger = () => {
      setActive(!active)
    }
  
    console.log(active);
  return (
   <>
   <header className="header">
      <div className="container">
        <div className="header__wrap">
          <img src="/Digital Agency.png" alt="" className="logo" />

          <div className={`header__menu ${active ? 'active' : ''}`}>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Testimonials</a>
            <a href="">Contact</a>
          </div>

          <div onClick={toggleBurger} className={`burger ${active ? 'active' : ''}`}>
            <span></span>
            <span></span>
          </div>
        </div>
      <div className="digital__content">
        <div className="content">
            <h1>Building Digital Products, Brands & Experience</h1>
            <p>Digital Agency Is Your Online Team Mangement Tool That Easy And Prompt</p>
            <button>Contact Us</button>
        </div>
        <img src="/business-people-discussing-business-idea.png" alt="" />
      </div>
      <div className="support">
        <p>Trusted by 4,000+ companies</p>
        <div className="brand">
            <img src="/Company logo.svg" alt="" />
            <img src="/Company logo (1).svg" alt="" />
            <img src="/Company logo (2).svg" alt="" />
            <img src="/Company logo (3).svg" alt="" />
        </div>
      </div>
      </div>
    </header>
   </>
  )
}

export default Digital