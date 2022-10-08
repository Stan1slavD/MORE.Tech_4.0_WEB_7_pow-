import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import Logo from "../icons/Group 4.svg";
import MyLink from "./link";
import Text from "./text";
import Coin from "../icons/монетка.svg";
import Alert from "../icons/уведомления.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { reducer } from "../store/reducer";
function NavBar(data) {
  const [nav, setNav] = useState("false");
  const log=useSelector(state=>state.reducer.log)
  if (log==true) {
    return (
      <Navbar>
        <Container>
          <Navbar.Brand>
            <img
              src={Logo}
              width="70"
              height="40"
              onClick={() => {
                localStorage.setItem("login", "false");
              }}
            />
          </Navbar.Brand>
          <div>
            <Text style={{ marginRight: "10px" }}>12 504</Text>
            <img src={Coin} width="20" style={{ marginRight: "10px" }} />
            <img src={Alert} width="20" />
          </div>
        </Container>
      </Navbar>
    );
  } else
    return (
      <Navbar>
        <Container>
          <Navbar.Brand>
            <img src={Logo} width="70" height="40" />
          </Navbar.Brand>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <MyLink fs="24px">Войти</MyLink>
          </Link>
        </Container>
      </Navbar>
    );
}

export default NavBar;
