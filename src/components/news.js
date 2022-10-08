import React from "react";
import ModalNews from "./modal";

function News() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <ul className="news">
      {[1, 2, 3].map((element) => {
        return <li onClick={() => setModalShow(true)}> </li>;
      })}
      <ModalNews
        show={modalShow}
        onHide={() => setModalShow(false)}
      ></ModalNews>
    </ul>
  );
}

export default News;
