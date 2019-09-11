import React from "react";
import Books from "./pages/Books";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Wrapper>
          <Route exact path="/" component={Books} />
          <Route exact path="/saved" component={Saved} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
