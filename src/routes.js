import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";

const Routes = () => (
  <Router>
    <Route exact path="/" component={Index} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
  </Router>
);

export default Routes;
