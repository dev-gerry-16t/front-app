import styled from "styled-components";

const Header = styled.header`
  height: 50px;
  background-color: #057ec7;
  box-shadow: 0px 4px 18px -8px rgba(0, 0, 0, 0.75);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: #fff;
  font-family: Poppins;
  a {
    color: #fff;
    font-family: Poppins;
  }
  .navigation {
    padding: 1em;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 1.4em;
      margin: 0;
    }
  }
  .log-out {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 890px) {
    .title {
      h1 {
        font-size: 1em;
      }
    }
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr 1fr;
    a {
      font-size: 0.8em;
    }
    .title {
      display: none;
    }
  }

  @media screen and (max-width: 360px) {
    display: flex;
    justify-content: space-between;
  }

`;

const SignOutButton = styled.button`
  background: transparent;
  outline: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 0.5em;
  &:hover {
    opacity: 0.2;
  }
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .container-login {
    padding: 1em;
    box-shadow: 0px 4px 36px -8px rgba(0, 0, 0, 0.75);
    border-radius: 1em;
    border-top: 10px solid #057ec7;
    form {
      display: flex;
      row-gap: 1em;
      flex-direction: column;
    }
  }
`;

const ContainerInit = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .any-title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      text-align: center;
      color: #797979;
      font-size: 2em;
    }
  }
`;

const ButtonAction = styled.button`
  font-family: Poppins;
  font-weight: 600;
  border: none;
  border-radius: 0.5em;
  padding: 1em;
  background-color: #057ec7;
  color: #fff;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export { Header, SignOutButton, Container, ButtonAction, ContainerInit };
