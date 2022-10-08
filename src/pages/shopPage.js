import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Events from "../components/events";
import List from "../components/list";
import Text from "../components/text";
import Top from "../components/topList";
import MyLink from "../components/link";
import NFT from "../components/nft";
import Menu from "../components/menu";
function ShopPage() {
  return (
    <Container>
      <Row style={{ marginTop: "30px" }}>
        <Col xs={3}>
          <Menu />
        </Col>
        <Col xs={6}>
          <List padding={"25px"}>
            <Text fs="24px">Магазин</Text>
            <Row>
              <Text fs="16px" ml="300px" mr="auto">
                мерч
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
            </Row>
            <Row>
              <Text fs="16px" ml="300px" mr="auto" marginTop="30px">
                nft
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
        <Col xs={3} style={{ paddingRight: "0" }}>
          <List padding={"25px"} style={{ height: "600px" }}>
            <Text fs="24px">Мои лоты</Text>
          </List>
        </Col>
      </Row>
    </Container>
  );
}

export default ShopPage;
