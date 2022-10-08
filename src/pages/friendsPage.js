import React from "react";
import Text from "../components/text";
import List from "../components/list";
import { Col, Row, Container, Form, Stack } from "react-bootstrap";
import Friend from "../components/friend";
import MyLink from "../components/link";
import Menu from "../components/menu";
function FriendsPage() {
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
                <Text fs="24px">Друзья</Text>
                <Text>253</Text>
              </div>

              <Form.Control placeholder="поиск" className="search" />
              <ul className="friends">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((element) => {
                  return (
                    <li>
                      <Friend></Friend>
                    </li>
                  );
                })}
              </ul>
            </Stack>
          </List>
        </Col>
        <Col xs={3} style={{ paddingRight: "0" }}></Col>
      </Row>
    </Container>
  );
}

export default FriendsPage;
