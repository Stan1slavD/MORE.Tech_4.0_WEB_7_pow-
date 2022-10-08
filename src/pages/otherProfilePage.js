import React from "react";
import Alert from "../icons/Comment.svg";
import { Container, Row, Col, Stack, Form, Button } from "react-bootstrap";
import List from "../components/list";
import MyLink from "../components/link";
import Text from "../components/text";
import Achievement from "../components/achievement";
import NFT from "../components/nft";
import Friend from "../components/friend";
import Events from "../components/events";
import Cash from "../icons/монетка.svg";
import Menu from "../components/menu";
function OtherProfilePage() {
  return (
    <>
      <Container>
        <Row style={{ marginTop: "30px" }}>
          <Col style={{ paddingLeft: "0" }}>
            <Menu />
          </Col>
          <Col xs={6}>
            <List padding={"25px"}>
              <Text>профиль</Text>
              <Row className="c">
                <Col>
                  <Stack>
                    <Text>голубев егор</Text>
                    <Text>Должность: мега программист </Text>
                    <Text> Стаж работы: 100 лет</Text>
                    <div className="balance">
                      <Text>Баланс: 18 423 </Text>
                      <img src={Cash} width="15px"></img>
                    </div>
                    <div
                      className="link"
                      style={{
                        width: "300px",
                        marginLeft: "0px",
                        marginTop: "45px",
                      }}
                    >
                      <Button className="pbtn" style={{ marginLeft: "0px" }}>
                        Добавить
                      </Button>
                      <Button className="pbtn" style={{ marginLeft: "10px" }}>
                        Благодарность
                      </Button>
                      <Button className="pbtn" style={{ marginLeft: "10px" }}>
                        <img src={Alert} width="15px" style={{}}></img>
                      </Button>
                    </div>
                  </Stack>
                </Col>
                <Col style={{ padding: "0px" }}>
                  <img
                    src={require("../icons/Rectangle 15(1).png")}
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

export default OtherProfilePage;
