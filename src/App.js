import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/navBar";
import Line from "./components/line";
import { Routes, Route, Link } from "react-router-dom";
import StartPage from "./pages/startPage";
import LoginPage from "./pages/loginPage";
import LoginStartPage from "./pages/loginStartPage";
import ProfulePage from "./pages/profilePage";
import OtherProfilePage from "./pages/otherProfilePage";
import FriendsPage from "./pages/friendsPage";
import NftPage from "./pages/nftPage";
import ShopPage from "./pages/shopPage";
import AchievementPage from "./pages/achievementPage";
import { useState } from "react";

//<Link to="/" className="menuLink homeLink" style={linkStyle}>
function App() {
  const [l,setl]=useState('false')
  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(349.76deg, #FF1087 -171.65%, #0A0049 111.11%)",
           
        }}
        className={"appcontainer bg"}
      >
        <div className={"container"}>
          <NavBar data={l}></NavBar>
          <Line color={"#FFEDF624"} />
          <Routes>
            <Route path="/" element={<StartPage />}></Route>
            <Route path="/login" element={<LoginPage login={setl}/>}></Route>
            <Route path="/l" element={<LoginStartPage />}></Route>
            <Route path="/me" element={<ProfulePage/>}></Route>
            <Route path="/other" element={<OtherProfilePage/>}></Route>
            <Route path="/friends" element={<FriendsPage/>}></Route>
            <Route path="/nft" element={<NftPage/>}/>
            <Route path="/shop" element={<ShopPage/>}/>
            <Route path="/achievment" element={<AchievementPage/>}/>
            <Route path="*" element={<StartPage />}></Route>
            
          </Routes>
        </div>
        <div style={{"height":"100px"}}></div>
      </div>
    </>
  );
}

export default App;
