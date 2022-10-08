import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Events from "../components/events";
import List from "../components/list";
import Text from "../components/text";
import Top from "../components/topList";
import MyLink from "../components/link";
import NFT from "../components/nft";
import Menu from "../components/menu";

function AchievementPage() {
  return (
    <Container>
      <Row style={{ marginTop: "30px" }}>
        <Col xs={3}>
          <Menu />
        </Col>
        <Col xs={6}>
          <List padding={"25px"}>
            <Text fs="24px">витрина достижений</Text>
            <Row>
              <Col className="c ">
                <NFT />
              </Col>
              <Col className="c ">
                <NFT />
              </Col>
              <Col className="c ">
                <NFT />
              </Col>
            </Row>
            <Row>
              <Text fs="24px" marginTop="30px">
                ваши достижения
              </Text>
              <Col className="c ">
                <NFT />
              </Col>
              <Col className="c ">
                <NFT />
              </Col>
              <Col className="c ">
                <NFT />
              </Col>
              <Col className="c ">
                <NFT />
              </Col>
              <Col className="c ">
                <NFT />
              </Col>
              <Col className="c ">
                <NFT />
              </Col>
              <Col className="c ">
                <NFT />
              </Col>
              <Col className="c ">
                <NFT />
              </Col>
              <Col className="c ">
                <NFT />
              </Col>
            </Row>
          </List>
        </Col>
      </Row>
    </Container>
  );
}

export default AchievementPage;
