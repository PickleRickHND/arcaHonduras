import "../components/css/navbar.css";
import React, { Component } from "react";

class Navbar extends Component {
  state = { clicked: false };

  handleHamburgerClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

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
            <ul
              id="navbar"
              className={this.state.clicked ? "activeNavbar" : "#navbar"}
            >
              <p>MENU</p>
              <li>
                <a href="#1">¿Quienes Somos?</a>
                <ul className="dropdown" id="dropdown">
                  <li>
                    <a href="#1-1">Historia6666666666666666666</a>
                  </li>
                  <li>
                    <a href="#1-2">Equipo</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#2">Misión y Visión</a>
                <ul className="dropdown" id="dropdown">
                  <li>
                    <a href="#2-1">Nuestra Misión</a>
                  </li>
                  <li>
                    <a href="#2-2">Nuestra Visión</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#3">Nuestros Programas</a>
                <ul className="dropdown" id="dropdown">
                  <li>
                    <a href="#3-1">Programa 1</a>
                  </li>
                  <li>
                    <a href="#3-2">Programa 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#4">¡Súmate!</a>
                <ul className="dropdown" id="dropdown">
                  <li>
                    <a href="#4-1">Voluntariado</a>
                  </li>
                  <li>
                    <a href="#4-2">Donaciones</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#5">Colabora con Nosotros</a>
                <ul className="dropdown" id="dropdown">
                  <li>
                    <a href="#5-1">Oportunidades</a>
                  </li>
                  <li>
                    <a href="#5-2">Proyectos</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#6">Socios Estratégicos</a>
                <ul className="dropdown" id="dropdown">
                  <li>
                    <a href="#6-1">Socio 1</a>
                  </li>
                  <li>
                    <a href="#6-2">Socio 2</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div id="mobileMenuButton_div" onClick={this.handleHamburgerClick}>
            <i
              id="hamburgerMenu"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
