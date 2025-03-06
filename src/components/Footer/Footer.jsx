import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer" id="contacto">
      <div className="footer-content">
        {/* Sección de Información de Contacto */}
        <div className="footer-section">
          <h3>Contacto</h3>
          <div className="contact-info">
            <div className="contact-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} aria-hidden="true" />
              <p>
                Centro Universitario de Ciencias Exactas e Ingenierías, Blvd.
                Gral. Marcelino García Barragán 1421, Olímpica, 44430
                Guadalajara, Jal.
              </p>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
              <p>hector.galvez5325@academicos.udg.mx</p>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
              <p>jovan.zepeda@academicos.udg.mx</p>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faPhoneAlt} aria-hidden="true" />
              <p>+52 33 1328 6565</p>
            </div>
          </div>
        </div>

        {/* Sección de Enlaces Rápidos */}
        <div className="footer-section">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/servicios">Servicios</a>
            </li>
            <li>
              <a href="/maquinas">Maquinas</a>
            </li>
            <li>
              <a href="/galeria">Galería</a>
            </li>
            <li>
              <a href="/location">Location</a>
            </li>
          </ul>
        </div>

        {/* Sección de Redes Sociales */}
        <div className="footer-section">
          <h3>Síguenos</h3>
          <div className="social-links">
            <a
              href="https://www.facebook.com/ILabTDI?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook iLabTDI"
            >
              <FontAwesomeIcon icon={faFacebook} />
              <span>iLabTDI</span>
            </a>
            <a
              href="https://www.instagram.com/ilab_tdi?igsh=aDJ5YTFubHFhYnE4"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram iLabTDI"
            >
              <FontAwesomeIcon icon={faInstagram} />
              <span>iLabTDI</span>
            </a>
            <a
              href="https://www.facebook.com/people/Prototyping-lab/61565476320207/?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Prototyping Lab"
            >
              <FontAwesomeIcon icon={faFacebook} />
              <span>Prototyping Lab</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sección de Derechos de Autor y Términos */}
      <div className="footer-bottom">
        <div className="footer-logos">
          <img
            src="./Images/logo_ilab.png"
            alt="Logo iLabTDI"
            className="logo logo-tdi"
          />
          <img
            src="./Images/CUCEI2.png"
            alt="Universidad de Guadalajara"
            className="logo logo-cucei"
          />
          <img
            src="./Images/division.png"
            alt="Sello UDG"
            className="logo logo-division"
          />
        </div>
        <p>&copy; 2025 iLabTDI. Todos los derechos reservados.</p>
        <div className="legal-links">
          <a href="/terminos">Términos y Condiciones</a>
          <a href="/privacidad">Política de Privacidad</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
