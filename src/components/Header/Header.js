import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import Aux from '../../hoc/Auxiliary';
import leystel_logo from '../../assets/images/leystel_logo.jpg';
import './Header.css';


const Header = (props) => {
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
              <div className="menu-button">
                 <MenuIcon/>                
              </div>

              <div className="navbar-link">
                <ul className="navbar-link__items">
                  <li className="navbar-link__item"><Link>Products</Link></li>
                  <li className="navbar-link__item"><Link>Services</Link></li>
                  <li className="navbar-link__item"><Link>Industries</Link></li>
                  <li className="navbar-link__item"><Link>Company</Link></li>
                </ul>
              </div>
            </nav>
            <nav className="mobile-nav">
              <div></div>
            </nav>
        </Aux>
     );
}
 
export default Header;