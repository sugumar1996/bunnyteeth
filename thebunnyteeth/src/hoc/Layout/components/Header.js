import React, { useState, useEffect } from "react";
import { baseImagePath } from "utility/utility";
import { Link } from "react-router-dom";
import "./layout.scss"
import * as actions from "redux/actions/index";
import { routes } from "utility/constants/constants";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { IoIosArrowDown } from 'react-icons/io';
import { RouteLink, Ul } from "../../../utility/styledComponents/styledComponents";
import styled, { css } from 'styled-components'


export const Header = (props) => {

  // const {setStyle} = props;

  // useEffect(() => { 
  //   setStyle();
  // }, []);

  const RouteLink = styled(Link)`
  color: #ffffff;
  background-color: ${props.mainTitle}
  text-decoration: none !important;
`

  const [headerWrap, setHeaderWrap] = useState(false)

  const navbarBackgroundChange = () => {
    if (window.scrollY >= 60) {
      return setHeaderWrap(true)
    }
    else {
      return setHeaderWrap(false)
    }
  }
  window.addEventListener('scroll', navbarBackgroundChange)
  const currentPath = props.history.location.pathname

  let headerTabsContent = (
    <>
      <header id="header" class="header  fixed-top d-flex align-items-center">
        <div class="w-100 d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center justify-content-between">
            <a href="index.html" class="main_logo d-flex align-items-center mr-2">
              <img src={baseImagePath('icons/main_logo.png')} class="custom_img"
                alt="Alphabet Internation School" />
            </a>
            <p className="font_size_14 m-0 roboto_font" style={{color: "#555555"}}>Multi Speciality Dental Clinic, Laser & Implants</p>
          </div>
          <nav id="navbar" class="navbar">
            <ul>
              <li><Link to="/" href="#hero" className="roboto_font">Home</Link></li>
              <li class="dropdown"><Link to="/about-us/" href="#" className="roboto_font"><span>About</span> <i class="bi bi-chevron-down dropdown-indicator"></i></Link>
                <ul>
                  <li class="dropdown"><a href="#" className="roboto_font"><span>Our Team</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                    <ul>
                      <li><a href="#" className="roboto_font">Dr Santosh</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="dropdown"><Link to="/treatments/" href="#" className="roboto_font"><span>Treatments</span> <i class="bi bi-chevron-down dropdown-indicator"></i></Link>
                <ul>
                  <li><Link to="/general-dentistry/" href="#" className="roboto_font">General Dentistry</Link></li>
                  <li><Link to="/smile-makeover/" href="#" className="roboto_font">Smile Makeover</Link></li>
                  <li><Link to="/dental-implants/" href="#" className="roboto_font">Dental Implants</Link></li>
                  <li><Link to="/kids-dentistry/" href="#" className="roboto_font">Kids Dentistry</Link></li>
                  <li><Link to="/sedation-dentistry/" href="#" className="roboto_font">Sedation Dentistry</Link></li>
                  <li><Link to="/dentures/" href="#" className="roboto_font">Dentures</Link></li>
                  <li><Link to="/bridges-crowns/" href="#" className="roboto_font">Bridges & Crowns</Link></li>
                  <li><Link to="/clear-aligners-invisible-braces/" href="#" className="roboto_font">Clear Aligners / Invisible Braces</Link></li>
                  <li><Link to="/orthodontic-treatment/" href="#" className="roboto_font">Orthodontic Treatment</Link></li>
                  <li><Link to="/wisdom-tooth-removal/" href="#" className="roboto_font">Wisdom Tooth Removal</Link></li>
                  <li><Link to="/root-canal/" href="#" className="roboto_font">Root Canal</Link></li>
                </ul>
              </li>
              <li><Link to="/testimonials/" href="#menu" className="roboto_font">Testimonials</Link></li>
              {/*<li class="dropdown"><a href="#" className="roboto_font"><span>Blog</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                  <li><a href="#" className="roboto_font">Digital Implants</a></li>
                  <li><a href="#" className="roboto_font">Mouth Breathing</a></li>
                </ul>
  </li>*/}
              <li><Link to="/contact-us/"  href="#menu" className="roboto_font">Contact</Link></li>
              <li><a href="#menu" className="primary_btn roboto_font">Book Appointment</a></li>
            </ul>
          </nav>
          <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        </div>
      </header>

    </>
  );


  return headerTabsContent;
};