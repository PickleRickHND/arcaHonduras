import "../components/css/navbar.css";
import React, { Component } from "react";

class Navbar extends Component {
  state = {
    mobileButton: false,
    arrows: {
      arrow1: false,
      arrow2: false,
      arrow3: false,
      arrow4: false,
      arrow5: false,
      arrow6: false,
    },
  };

  handleHamburgerClick = () => {
    this.setState({ mobileButton: !this.state.mobileButton });
  };

  handleArrowClick = (arrowName) => {
    this.setState((prevState) => ({
      arrows: {
        ...prevState.arrows,
        [arrowName]: !prevState.arrows[arrowName],
      },
    }));
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
              className={this.state.mobileButton ? "activeNavbar" : "#navbar"}
            >
              <p>MENU</p>
              <li>
                <a href="#1">¿Quienes Somos?</a>
                <div
                  id="arrowHead_div"
                  onClick={() => this.handleArrowClick("arrow1")}
                >
                  <i
                    class={
                      this.state.arrows["arrow1"]
                        ? "fas fa-angle-right"
                        : "fas fa-angle-right"
                    }
                  ></i>
                </div>
                <ul
                  className={
                    this.state.arrows.arrow1 ? "activeDropdown" : "dropdown"
                  }
                  id="dropdown"
                >
                  <p>¿QUIENES SOMOS?</p>
                  <div
                    id="backArrowHead_div"
                    onClick={() => this.handleArrowClick("arrow1")}
                  >
                    <i class="fas fa-angle-left"></i>
                  </div>
                  <li>
                    <a href="#1-1">Historia6666666666</a>
                  </li>
                  <li>
                    <a href="#1-2">Equipo</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#2">Misión y Visión</a>
                <div
                  id="arrowHead_div"
                  onClick={() => this.handleArrowClick("arrow2")}
                >
                  <i
                    class={
                      this.state.arrows["arrow2"]
                        ? "fas fa-angle-right"
                        : "fas fa-angle-right"
                    }
                  ></i>
                </div>
                <ul
                  className={
                    this.state.arrows.arrow2 ? "activeDropdown" : "dropdown"
                  }
                  id="dropdown"
                >
                  <p>MISIÓN Y VISIÓN</p>
                  <div
                    id="backArrowHead_div"
                    onClick={() => this.handleArrowClick("arrow2")}
                  >
                    <i class="fas fa-angle-left"></i>
                  </div>
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
                <div
                  id="arrowHead_div"
                  onClick={() => this.handleArrowClick("arrow3")}
                >
                  <i
                    class={
                      this.state.arrows["arrow3"]
                        ? "fas fa-angle-right"
                        : "fas fa-angle-right"
                    }
                  ></i>
                </div>
                <ul
                  className={
                    this.state.arrows.arrow3 ? "activeDropdown" : "dropdown"
                  }
                  id="dropdown"
                >
                  <p>NUESTROS PROGRAMAS</p>
                  <div
                    id="backArrowHead_div"
                    onClick={() => this.handleArrowClick("arrow3")}
                  >
                    <i class="fas fa-angle-left"></i>
                  </div>
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
                <div
                  id="arrowHead_div"
                  onClick={() => this.handleArrowClick("arrow4")}
                >
                  <i
                    class={
                      this.state.arrows["arrow4"]
                        ? "fas fa-angle-right"
                        : "fas fa-angle-right"
                    }
                  ></i>
                </div>
                <ul
                  className={
                    this.state.arrows.arrow4 ? "activeDropdown" : "dropdown"
                  }
                  id="dropdown"
                >
                  <p>¡SÚMATE!</p>
                  <div
                    id="backArrowHead_div"
                    onClick={() => this.handleArrowClick("arrow4")}
                  >
                    <i class="fas fa-angle-left"></i>
                  </div>
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
                <div
                  id="arrowHead_div"
                  onClick={() => this.handleArrowClick("arrow5")}
                >
                  <i
                    class={
                      this.state.arrows["arrow5"]
                        ? "fas fa-angle-right"
                        : "fas fa-angle-right"
                    }
                  ></i>
                </div>
                <ul
                  className={
                    this.state.arrows.arrow5 ? "activeDropdown" : "dropdown"
                  }
                  id="dropdown"
                >
                  <p>COLABORA CON NOSOTROS</p>
                  <div
                    id="backArrowHead_div"
                    onClick={() => this.handleArrowClick("arrow5")}
                  >
                    <i class="fas fa-angle-left"></i>
                  </div>
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
                <div
                  id="arrowHead_div"
                  onClick={() => this.handleArrowClick("arrow6")}
                >
                  <i
                    class={
                      this.state.arrows["arrow6"]
                        ? "fas fa-angle-right"
                        : "fas fa-angle-right"
                    }
                  ></i>
                </div>
                <ul
                  className={
                    this.state.arrows.arrow6 ? "activeDropdown" : "dropdown"
                  }
                  id="dropdown"
                >
                  <p>SOCIOS ESTRATÉGICOS</p>
                  <div
                    id="backArrowHead_div"
                    onClick={() => this.handleArrowClick("arrow6")}
                  >
                    <i class="fas fa-angle-left"></i>
                  </div>
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
              className={
                this.state.mobileButton ? "fas fa-times" : "fas fa-bars"
              }
            ></i>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
