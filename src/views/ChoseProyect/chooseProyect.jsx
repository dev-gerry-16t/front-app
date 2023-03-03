import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1em;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 300px;
  height: 300px;
  border-radius: 1em;
  box-shadow: 0px 4px 36px -8px rgba(0, 0, 0, 0.75);
  transition: all .2s ease-in-out;
  :hover {
    transform: scale(1.05);
  }
`;

const ChooseProyect = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <ContainerCards>
        <Card
          onClick={() => {
            navigate("/examen_final");
          }}
        >
          <h3>Examen Curso GCP</h3>
        </Card>
        <Card
          onClick={() => {
            navigate("/demo/inicio");
          }}
        >
          <h3>Aplica Radius</h3>
        </Card>
      </ContainerCards>
    </Container>
  );
};

export default ChooseProyect;
