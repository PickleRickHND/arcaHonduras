import React from "react";
import "./css/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="_footer section_padding">
        <div className="footer_links">
          <div className="footer_links_div">
            <img
              id="footerImage"
              src={require("../images/logoWithName.png")}
              alt="Footer Logo"
            />

            <h6>¡Juntos, con o sin discapacidades intelectuales!</h6>
          </div>

          <div className="footer_links_div">
            <h4>Comunidad Tegucigalpa</h4>
            <a href="mailto:info@elarcahn.org">
              <p>
                <i class="fa-solid fa-envelope"></i>info@elarcahn.org
              </p>
            </a>
            <a href="tel:+50422571618">
              <p>
                <i class="fa-solid fa-phone"></i>+504 2257 - 1618
              </p>
            </a>
            <a
              href="https://www.facebook.com/ArcadeHondurasTegucigalpa"
              target="blank"
            >
              <p>
                <i class="fa-brands fa-facebook"></i>Facebook
              </p>
            </a>
            <a href="https://maps.app.goo.gl/UhcG5X3EiCc3daVK9" target="blank">
              <p>
                <i class="fa-solid fa-location-dot"></i>Ubicación
              </p>
            </a>
          </div>

          <div className="footer_links_div">
            <h4>Comunidad Choluteca</h4>
            <a href="mailto:info@elarcahn.org">
              <p>
                <i class="fa-solid fa-envelope"></i>info@elarcahn.org
              </p>
            </a>
            <a href="tel:+50427800403">
              <p>
                <i class="fa-solid fa-phone"></i>+504 2780 - 0403
              </p>
            </a>
            <a href="https://www.facebook.com/ArcaCholuteca" target="blank">
              <p>
                <i class="fa-brands fa-facebook"></i>Facebook
              </p>
            </a>
            <a href="https://maps.app.goo.gl/SyJ9GcYZrfXdGTUWA" target="blank">
              <p>
                <i class="fa-solid fa-location-dot"></i>Ubicación
              </p>
            </a>
          </div>

          <hr></hr>

          <div className="footer_below">
            <div className="footer_copyright">
              <p>
                Copyright © {new Date().getFullYear()} El Arca Honduras. Todos
                los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
