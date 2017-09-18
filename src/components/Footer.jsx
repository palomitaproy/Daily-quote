import React from 'react';
import SocialNetworks from "./SocialNetworks.jsx";
import { Router, Route, Link } from 'react-router-dom';


class Footer extends React.Component{
  render(){
    return (
      <div>
        <footer id="footer-app" className="py-3 bg-light" >
        <SocialNetworks />
          <div className="container text-center">
         <Link to="about">About</Link>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer;
