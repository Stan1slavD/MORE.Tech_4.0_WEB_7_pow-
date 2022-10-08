import React from "react";
import { Container, Row, Col, Stack, Form } from "react-bootstrap";
import List from "../components/list";
import MyLink from "../components/link";
import Text from "../components/text";
import Achievement from "../components/achievement";
import NFT from "../components/nft";
import Friend from "../components/friend";
import Events from "../components/events";
import Menu from "../components/menu";
function ProfilePage() {
  return (
    <>
      <Container>
        <Row style={{ marginTop: "30px" }}>
          <Col style={{ paddingLeft: "0" }}>
            <Menu />
          </Col>
          <Col xs={6}>
            <List padding={"25px"}>
              <Text>Личный кабинет</Text>
              <Row className="c">
                <Col>
                  <Stack>
                    <Text>РОМАН ЛЕРНЕР</Text>
                    <Text>Должность: программист Стаж работы: 0 лет</Text>
                  </Stack>
                </Col>
                <Col style={{ padding: "0px" }}>
                  <img
                    src={require("../icons/Rectangle 15.png")}
                    style={{ marginLeft: "70px" }}
                  />
                </Col>
              </Row>
              <div className="link c">
                <Text>достижения</Text>
                <MyLink>см. все</MyLink>
              </div>
              <Row>
                <Col className="c ">
                  <Achievement />
                </Col>
                <Col className="c ">
                  <Achievement />
                </Col>
                <Col className="c ">
                  <Achievement />
                </Col>
              </Row>
              <div className="link c">
                <Text>витрина NFT</Text>
                <MyLink>см. все</MyLink>
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
            </List>
          </Col>
          <Col style={{ paddingRight: "0" }}>
            <List padding={"25px"}>
              <Stack>
                <div className="link">
                  <Text>Друзья</Text>
                  <Text>253</Text>
                </div>

                <Form.Control placeholder="поиск" className="search" />
                <ul className="friends">
                  {[1, 2, 3, 4, 5].map((element) => {
                    return (
                      <li>
                        <Friend></Friend>
                      </li>
                    );
                  })}
                </ul>
              </Stack>
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

export default ProfilePage;
