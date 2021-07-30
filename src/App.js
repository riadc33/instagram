
import React, { useState } from 'react'
import celular from "./assets/img/celular-instagram.png"
import {
  Alert,
  Button,
  Form,
  FormGroup,
  Input,
  Col,
  Row,
  Label,
} from "reactstrap";
import img1 from "./assets/img/img1.jpeg"
import img2 from "./assets/img/img2.jpeg"
import img3 from "./assets/img/img3.jpeg"
import img4 from "./assets/img/img4.jpeg"
import logo from "./assets/img/logoinst.png"
import play from "./assets/img/descargaPlaystore.png"
import apple from "./assets/img/descargaApple.png"
import styled, { keyframes } from 'styled-components'
function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  console.log(username);
  const Spann = styled.span`
  font-size: 13px;
  width: 100% !important;
  height: 100% !important;
  margin-left: 5px;
  align-items: center;
  display: flex;
  ${username != "" ?
      `transform: translate(-25px, -9px)scale(0.8);
      transition: 3s linear;
      `
      : ``}
`;





  return (
    <div className="md:flex md:h-screen  justify-center	items-center w-full	" style={{ background: "#fafafa" }}>

      <div className="div-moviles-login md:flex hidden" >
        <img src={celular} width="454px" height="618px" />
        <div id="cf">
          <img className="img1" src={img1} width="454px" height="618px" />
          <img className="img2" src={img2} width="454px" height="618px" />
          <img className="img3" src={img3} width="454px" height="618px" />
          <img className="img4" src={img4} width="454px" height="618px" />

        </div>

      </div>
      <div className="div-input-login  bg-blue-400" >

        <div className=" md:mt-24 bg-white" style={{ border: "  1px solid rgba(var(--ca6, 219, 219, 219), 1)" }} >
          <img className="img-logo-login" src={logo} width="175px" height="51px" ></img>

          <Form className="form-login" >

            <FormGroup autocomplete="off">
              <label className="input-pass-and-user">
                <span className={`span-input-pass-and-user ${username != "" ? "animacion-span" : ""}`} >Telefono,usuario o correo electronico</span>
                <Input
                  className={`pass-and-user ${username != "" ? "input-animacion  pb-2" : ""}`}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  name="email"
                  required
                  autocomplete="new-password"
                />
              </label>
            </FormGroup>
            <FormGroup>
              <label className="input-pass-and-user  ">
                <span className={`span-input-pass-and-user ${password != "" ? "animacion-span" : ""}`}>Contraseña</span>
                <Input
                  className={`pass-and-user  focus:border-red-500 ${password != "" ? "input-animacion pb-2" : ""}`}
                  type="password"

                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  autocomplete="new-password"

                  required
                />
              </label>
            </FormGroup>
            <FormGroup>
              <Button
                className="btn-login text-white"
                onClick={() => (window.location.href = "/Dashboard")}
                block
              >
                Iniciar sesión
              </Button>
            </FormGroup>
          </Form>

          <div className="divider">
            <strong
              style={{
                paddingLeft: "20px",
                paddingRight: "20px",
                backgroundColor: "#ffffff",
                color: "#8e8e8e"
              }}
            >
              O
            </strong>
          </div>
          <a href="https://www.facebook.com/" target="_blank">
            <Button className="btn-face-login">Iniciar sesión con Facebook</Button>
          </a>
          <a className="a-login" href="https://www.instagram.com/accounts/password/reset/?hl=es-la" target="_blank">
            ¿Olvidaste tu contraseña?
          </a>

        </div>
        <div className="div-registrarse">
          <span>{`¿No tienes una cuenta? `}</span>
          <a style={{ marginLeft: "5px", color: "#0095f6", fontWeight: "600" }}>Regístrate</a>
        </div>
        <div className="text-center	mt-4">
          <span className="">Descargar app</span>
          <div className="flex justify-center mt-4">
            <a style={{ width: "134.281px", height: "40px", marginRight: "8px" }} href="https://apps.apple.com/app/instagram/id389801252?vt=lo">
              <img src={apple} width="134.281px" height="40px"></img>
            </a>
            <a style={{ width: "134.281px", height: "40px" }} href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb&utm_campaign=loginPage&ig_mid=E5CCD392-D211-4688-B66B-05D0D4EC2817&utm_content=lo&utm_medium=badge">
              <img src={play} width="134.281px" height="40px"></img>
            </a>
          </div>


        </div>

      </div>

    </div>


  );
}

export default App;
