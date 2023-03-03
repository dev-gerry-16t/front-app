import React from "react";
import { ButtonAction, Container } from "../../assets/styles/styles";
import CustomForm from "../../components/customForm";
import CustomInput from "../../components/customInput";
import { useNavigate } from "react-router-dom";
import useOnChangeInput from "../../hooks/useOnChangeInput";

const Login = () => {
  const initialState = {
    username: "",
    password: "",
  };
  const [dataForm, handlerOnChange] = useOnChangeInput(initialState);
  const navigate = useNavigate();

  const handlerVerifyLogin = async () => {
    try {
      //Ejecutaria un api de inicio de sesión
      localStorage.setItem("username", dataForm.username); //Almacenaria en Redux la información del usuario
      navigate("/selecciona");
    } catch (error) {
      //Pondria un mensaje de error
    }
  };

  return (
    <Container>
      <div className="container-login">
        <h1>Iniciar Sesión</h1>
        <CustomForm
          onSubmit={() => {
            handlerVerifyLogin();
          }}
        >
          <CustomInput
            value={dataForm.username}
            name="username"
            isRequired
            type="text"
            placeholder="Nombre de usuario"
            onChange={handlerOnChange}
          />
          <CustomInput
            value={dataForm.password}
            name="password"
            isRequired
            type="password"
            placeholder="Contraseña"
            onChange={handlerOnChange}
          />
          <ButtonAction>Iniciar sesión</ButtonAction>
        </CustomForm>
      </div>
    </Container>
  );
};

export default Login;
