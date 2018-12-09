import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchPage from "./pages/search"
import SavedPage from "./pages/saved"



class App extends Component {
  render() {
    return (
      <Router>
      <div>
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/saved" component={SavedPage} />
      </div>
    </Router>
    );
  }
}

export default App;
