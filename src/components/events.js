import React from "react";
import Text from "./text";
import Img from "../icons/Rectangle 26.svg";
import { Col, Row, Stack } from "react-bootstrap";
function Events(p) {
  if (p == null) {
    p = "10px";
  }
  return (
    <>
      <Text fs="24px">мероприятия</Text>
      <ul className="event">
        {[1, 2, 3].map((element) => {
          return (
            <li>
              <Row style={{ padding: p }}>
                <Col className="imgCol">
                  {" "}
                  <img src={Img}></img>
                </Col>
                <Col style={{ marginLeft: "-40px" }}>
                  <Stack>
                    <Text fs="14px" fw="900">
                      Лекция UI/UX
                    </Text>
                    <Text fs="13px">16:00 23/10/2023</Text>
                    <Text fs="9px">
                      Какое-то пипец важное мероприятие: ну мне лень дальше
                      придумывать текст поэтому так...
                    </Text>
                  </Stack>
                </Col>
              </Row>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Events;
