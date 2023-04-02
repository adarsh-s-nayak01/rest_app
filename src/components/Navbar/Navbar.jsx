import React,{useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu,setTogglemenu] = useState(false);

return (
  <nav className="app__navbar">
    <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
    </div>

    <ul className="app__navbar-links">
      <li className="p__opensans" href="#home"><a>Home</a></li>
      <li className="p__opensans"><a href="#about">About</a></li>
      <li className="p__opensans"><a href="#menu">Menu</a></li>
      <li className="p__opensans"><a href="#awards">Awards</a></li>
      <li className="p__opensans"><a href="#contact">Contact</a></li>
    </ul>

    <div className="app__navbar-login">
      <a href="#Login" className="p__opensans">Login/Sign Up</a>
      <div />
      <a href="/" className="p__opensans">Book a Table</a>
    </div>


{/* for small screen, view this */}
    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=>{setTogglemenu(true)}} />

      {toggleMenu &&(
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => {setTogglemenu(false)}} />
      
          <ul className="app__navbar-smallscreen_links">
            <li className="p__opensans" href="#home"><a>Home</a></li>
            <li className="p__opensans"><a href="#about">About</a></li>
            <li className="p__opensans"><a href="#menu">Menu</a></li>
            <li className="p__opensans"><a href="#awards">Awards</a></li>
            <li className="p__opensans"><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}

    </div>

    {/* uptill here */}
  </nav>
)
};

export default Navbar;
