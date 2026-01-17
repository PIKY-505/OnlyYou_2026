import React from "react";
import ShinyText from "../UI/ShinyText"; // Reutilizamos tu texto brillante
import "../../styles/MainContent.scss";

const MainContent = () => {
  return (
    <div className="main-container">
      {/* TARJETA DE CRISTAL (Glass Card) */}
      <div className="glass-card">
        {/* CABECERA */}
        <header>
          {/* Título Lorem Ipsum */}
          <h1>Lorem Ipsum</h1>
          <div className="subtitle">
            Dolor sit amet, consectetur adipiscing elit
          </div>
        </header>

        {/* CUERPO DEL TEXTO */}
        <div className="content-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
