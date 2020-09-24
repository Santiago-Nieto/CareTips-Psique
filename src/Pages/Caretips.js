import "./Caretips.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Caretips = () => {
  return (
    <div className="Caretips">
      <div className="Arte">
        <img src="./Imagenes/ArteCart.png" alt="" />
      </div>
      <div className="Flor">
        <img src="./Imagenes/Flor.png" alt="" />
      </div>
      <div className="Entre">
        <img src="./Imagenes/Entre.png" alt="" />
      </div>
      <div className="Musica">
        <img src="./Imagenes/Musica.png" alt="" />
      </div>
      <div className="Rosca">
        <img src="./Imagenes/Rosca.png" alt="" />
      </div>
      <div className="Auto">
        <img src="./Imagenes/Auto.png" alt="" />
      </div>
      <div className="Dinero">
        <img src="./Imagenes/Dinero.png" alt="" />
      </div>
      <div className="Molecula">
        <img src="./Imagenes/Molecula.png" alt="" />
      </div>
      <div className="Cerebro">
        <img src="./Imagenes/Cerebro.png" alt="" />
      </div>
      <font color="#A" size="20" face="Times new roman">
        <b>CareTips</b>
      </font>
      <img className="Imagen" src="./Imagenes/Caretips.jpg" alt="" />
      <nav
        className="navbar navbar-expand bg-light navbar-light fixed-bottom"
        role="navigation"
      >
        <div
          className="collapse nav navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav navbar-center">
            <li clasName="nav-item">
              <a className="nav-link" href="#">
<img src="./Imagenes/Perfil.png" alt="" />
              </a>
            </li>
            <li clasName="nav-item">
              <a className="nav-link" href="#">
<img src="./Imagenes/Emociones.png" alt="" />
              </a>
            </li>
            <li clasName="nav-item">
              <a className="nav-link" href="#">
  <img src="./Imagenes/Diario.png" alt="" />
              </a>
            </li>
            <li clasName="nav-item">
              <a className="nav-link" href="#">
  <img src="./Imagenes/Cartips.png" alt="" />
              </a>
            </li>
            <li clasName="nav-item">
              <a className="nav-link" href="#">
    <img src="./Imagenes/Arterapia.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Caretips;
