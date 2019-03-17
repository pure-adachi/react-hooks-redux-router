import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Cats from "./components/Cats";
import Cat from "./components/Cats/Cat";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/cats" component={Cats} />
        <Route exact path="/cats/:id" component={Cat} />
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
