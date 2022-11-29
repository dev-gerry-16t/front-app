import React from "react";
import LogoApp from "../../assets/img/logoApp";
import { ContainerInit } from "../../assets/styles/styles";

const Inicio = () => {
  return (
    <ContainerInit>
      <div className="any-title">
        <LogoApp />
        <h1>Te damos la bienvenida</h1>
      </div>
    </ContainerInit>
  );
};

export default Inicio;
