import React from "react";
import Loadable from "react-loadable";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./containers/Layout/defaultLayout";
import LoaderProcess from "./components/loaderProcess";
import "./App.css";

const loading = () => <LoaderProcess />;

const Login = Loadable({
  loader: () => import("./containers/Login/login"),
  loading,
});

const Choose = Loadable({
  loader: () => import("./views/ChoseProyect/chooseProyect"),
  loading,
});

const GPCCourse = Loadable({
  loader: () => import("./views/GPC/gpcCourse"),
  loading,
});

const App=() =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/selecciona" element={<Choose />} />
        <Route path="/examen_final" element={<GPCCourse />} />
        <Route path="/demo/*" element={<DefaultLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
