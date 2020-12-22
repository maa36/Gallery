import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Galerie from "./components/Galerie";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={Galerie} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
