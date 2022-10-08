import React from "react";
import MyLink from "./link";
import { Link } from "react-router-dom";
import List from "./list";
function Menu() {
  return (
    <List>
      <ul>
        <li>
          <Link to="/me" style={{ textDecoration: "none" }}>
            <MyLink>Личный кабинет</MyLink>
          </Link>
        </li>
        <li className="menu">
          <Link to="/l" style={{ textDecoration: "none" }}>
            <MyLink>Главная</MyLink>
          </Link>
        </li>
        <li className="menu">
          <Link to="/shop" style={{ textDecoration: "none" }}>
            <MyLink>Магазин</MyLink>
          </Link>
        </li>
        <li className="menu">
          <Link to="/friends" style={{ textDecoration: "none" }}>
            <MyLink>Друзья</MyLink>
          </Link>
        </li>
        <li className="menu">
          <Link to="/nft" style={{ textDecoration: "none" }}>
            <MyLink>NFT</MyLink>
          </Link>
        </li>
        <li className="menu">
          <Link to="/achievment" style={{ textDecoration: "none" }}>
            <MyLink>Достижения</MyLink>
          </Link>
        </li>
      </ul>
    </List>
  );
}

export default Menu;
