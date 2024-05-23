import "../components/css/navbar.css";
import React, { Component } from "react";

class Navbar extends Component {
  state = { clicked: false };

  handleHamburgerClick = () => { 
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    return (
      <div>
        <nav>
          <img
            id="navbarImage"
            src={require("../images/logoWithName.png")}
            alt="Navbar Logo"
          />

          <div>
            <ul id="navbar">
              <li>
                <a href="#1">¿Quienes Somos?</a>
              </li>
              <li>
                <a href="#2">Misión y Visión</a>
              </li>
              <li>
                <a href="#3">Nuestros Programas</a>
              </li>
              <li>
                <a href="#4">¡Súmate!</a>
              </li>
              <li>
                <a href="#5">Colabora con Nosotros</a>
              </li>
              <li>
                <a href="#6">Socios Estratégicos</a>
              </li>
            </ul>
          </div>

          <div id="mobileMenuButton_div">
            <i
              id="hamburgerMenu"
              className={
                this.state.clicked
                  ? "fa-solid fa-xmark-large"
                  : "fa-solid fa-bars"
              }
            ></i>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
