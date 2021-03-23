import React, { useState } from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import MenuIcon from '@material-ui/icons/Menu';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { Link } from 'react-router-dom';
import Aux from '../../hoc/Auxiliary';
import leystel_logo from '../../assets/images/leystel_logo.jpg';
import './Header.css';


const Header = (props) => {

  const [ mobileNavCancelButton, setMobileNavCancelButton ] = useState(false);
  const [ showMobileNav, setShowMobileNav ] = useState(false)
  const [ closeMobileNav, setCloseMobileNav ] = useState(false)


  //show mobile nav
  const showMobileNavHandler = () => {
  setShowMobileNav(true);
  setMobileNavCancelButton(true);
  }

  //close mobile nav
  const closeMobileNavHandler = () => {
    setShowMobileNav(false);
    setCloseMobileNav(true);
    setTimeout(() => { 
      setCloseMobileNav(false);
      setMobileNavCancelButton(false)
    }, 260)
  }

  //set class for mobile navigation
  const mobileNavClass = () => {
    if(showMobileNav){
      return 'mobile-nav show-mobile-nav';
    }
    if(closeMobileNav){
      return 'mobile-nav close-mobile-nav';
    }
    return 'mobile-nav';
  }
  
    return ( 
        <Aux>
            <div className="connect-info">
              <ul className="connect-info__items">
                <li className="connect-info__item"><span><PhoneIcon/></span> +2348062671035, +2348183936601</li>
                <li className="connect-info__item"><a href='mailto:info@leystel.com'><span><EmailIcon/></span> info@leystel.com</a></li>
              </ul>
            </div>
            <nav className="row navbar">
              <div className="navbar-brand">
                <img className="navbar-brand__image" src={leystel_logo} alt="leystel logo"/>    
              </div>
              <div className="menu-button" onClick={showMobileNavHandler}> 
                  <MenuIcon/> 
              </div>
              <div className="navbar-link">
                <ul className="navbar-link__items">
                  <li className="navbar-link__item"><Link to="">Products</Link></li>
                  <li className="navbar-link__item"><Link to="">Services</Link></li>
                  <li className="navbar-link__item"><Link to="">Industries</Link></li>
                  <li className="navbar-link__item"><Link to="">Company</Link></li>
                </ul>
              </div>
            </nav>

            <div className={`${showMobileNav && 'backdrop'}`} onClick={closeMobileNavHandler}></div>
            <nav className={mobileNavClass()}>
              {
                 mobileNavCancelButton && <div className="mobile-nav__close" onClick={closeMobileNavHandler}> <CloseRoundedIcon/> </div>
              }
              <div className="mobile-nav-link">
                <ul className="mobile-nav-link__items">
                  <li className="mobile-nav-link__item"><Link to="">Products</Link></li>
                  <li className="mobile-nav-link__item"><Link to="">Services</Link></li>
                  <li className="mobile-nav-link__item"><Link to="">Industries</Link></li>
                  <li className="mobile-nav-link__item"><Link to="">Company</Link></li>
                </ul>
              </div>
            </nav>
        </Aux>
     );
}
 
export default Header;