import "./App.css";
import { useState } from "react";

import Container from "./component/Container";
import Content from "./component/Content";
import Navbar from "./component/Navbar";
import { bioData, contacts } from "./utils/sourceData";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Container>
        <Content bioData={bioData} contacts={contacts} />
      </Container>
      {/* <Footer /> */}
    </>
  );
}

export default App;
