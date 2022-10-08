import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logAction } from "../store/reducer";
function LoginPage() {
  const dispatch=useDispatch()
  //localStorage.setItem("login", "false");
  return (
    <Form className={"form"}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control placeholder="Логин" className="in" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Пароль" className="in" />
      </Form.Group>
      <Link to="/l" style={{ textDecoration: "none" }}>
        <Button
          className="btn"
          onClick={() => {
            dispatch(logAction(true))
            // localStorage.setItem("login", "true");
          }}
        >
          Войти
        </Button>
      </Link>
    </Form>
  );
}

export default LoginPage;
