import React from "react";
import { Col, Row, Container, Stack } from "react-bootstrap";
import Text from "../components/text.js";
import MyLink from "../components/link.js";
import List from "../components/list.js";
import NFT from "../components/nft.js";
import Menu from "../components/menu.js";
function NftPage() {
  return (
    <Container>
      <Row style={{ marginTop: "30px" }}>
        <Col xs={3}>
          <Menu />
        </Col>
        <Col xs={6}>
          <List padding={"25px"}>
            <Stack>
              <div className="link">
                <Text fs="24px">витрина NFT</Text>
                <Text>ред.</Text>
              </div>
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
              <div className="link" style={{ marginTop: "30px" }}>
                <Text fs="24px">ваша коллекция NFT</Text>
              </div>
              {[1, 2, 3].map(() => {
                return (
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
                );
              })}
            </Stack>
          </List>
        </Col>
        <Col xs={3} style={{ paddingRight: "0" }}></Col>
      </Row>
    </Container>
  );
}

export default NftPage;
