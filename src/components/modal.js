import React from "react";
import { Modal, Button, Row, Col, Stack } from "react-bootstrap";
import Text from "./text";
import Img from "../icons/Rectangle 26.svg";
function ModalNews(props) {
  return (
    <Modal {...props} centered>
      <Modal.Body>
        <Row>
          <Col xs={4}>
            <img src={Img} />
          </Col>
          <Col xs={8}>
            <Stack>
              <Text fs="16px" fw="900">
                Лекция UI/UX
              </Text>
              <Text fs="15px">16:00 23/10/2023</Text>
              <Text fs="11px">
                Какое-то пипец важное мероприятие: ну мне лень дальше
                придумывать текст поэтому так...
              </Text>
            </Stack>
          </Col>
        </Row>
        <Button className="sub" onClick={props.onHide}>
          Записаться
        </Button>
      </Modal.Body>
    </Modal>
  );
}

export default ModalNews;
