import React, { useEffect } from "react";
import styled from "styled-components";
import MyLink from "../components/link";
import { Container, Row, Col } from "react-bootstrap";
import List from "../components/list";
import Text from "../components/text";
import Top from "../components/topList";
import Events from "../components/events";
import News from "../components/news";
import Menu from "../components/menu";
function LoginStartPage() {
  useEffect(() => {}, []);
  return (
    <>
      <Container>
        <Row style={{ marginTop: "30px" }}>
          <Col style={{ paddingLeft: "0" }}>
            <Menu />
          </Col>
          <Col xs={6}>
            <List padding={"25px"}>
              <Text fs="24px">Новости</Text>
              <News></News>
            </List>
          </Col>
          <Col style={{ paddingRight: "0" }}>
            <List padding={"25px"}>
              <Text fs="24px">рейтинг</Text>
              <Top></Top>
            </List>
            <List mt="30px">
              <Events></Events>
            </List>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default LoginStartPage;
