import React, { useState } from "react";
import { Tooltip, Modal } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
import { Route, Routes, useNavigate } from "react-router-dom";
import Ejemplo from "../../views/Ejemplo/ejemplo";
import Inicio from "../../views/Inicio/inicio";
import { Header, SignOutButton } from "../../assets/styles/styles";
import CustomMenu from "../../components/customMenu";
import { dataMenu } from "../../assets/apiFake/dataApiFake";

const DefaultLayout = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const handlerOnSignOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <Modal
        title="Saliendo"
        open={visible}
        onOk={handlerOnSignOut}
        onCancel={() => setVisible(false)}
        okText="ACEPTAR"
        cancelText="CANCELAR"
      >
        <p>¿Desea salir del proyecto <strong>{localStorage.getItem("username")}</strong>?</p>
      </Modal>
      <Header>
        <div className="navigation">
          <CustomMenu
            data={dataMenu}
            onClick={() => {
              setVisible(true);
            }}
          />
        </div>
        <div className="title">
          <h1>SUPER MERCADO EN LINEA</h1>
        </div>
        <div className="log-out">
          <Tooltip placement="bottom" title="Cerrar sesión">
            <SignOutButton onClick={handlerOnSignOut}>
              <PoweroffOutlined
                style={{
                  fontSize: "20px",
                }}
              />
            </SignOutButton>
          </Tooltip>
        </div>
      </Header>
      <Routes>
        <Route path="inicio" element={<Inicio />} />
        <Route path="ejemplo" element={<Ejemplo />} />
      </Routes>
    </div>
  );
};

export default DefaultLayout;
