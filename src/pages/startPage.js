import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Events from "../components/events";
import List from "../components/list";
import Text from "../components/text";
import Top from "../components/topList";
function StartPage() {
  return (
    <>
      <Container>
        <Row style={{ marginTop: "30px" }}>
          <Col xs={3}>
            <List>
              <Events p={"1px"}></Events>
            </List>
          </Col>
          <Col xs={6}>
            <List height={"900px"} padding={"25px"}>
              <Text fs="24px">Новости</Text>
            </List>
          </Col>
          <Col xs={3} style={{ paddingRight: "0" }}>
            <List padding={"25px"}>
              <Text fs="24px">Рейтинг</Text>
              <Top></Top>
            </List>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default StartPage;
