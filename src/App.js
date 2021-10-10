import React from "react";
import { Container } from "@material-ui/core";

import "./App.css";
import SinglePage from "./components/SinglePage";

const App = () => {
  return (
    <Container maxWidth="xl" className="App">
      <SinglePage />
    </Container>
  );
};

export default App;
