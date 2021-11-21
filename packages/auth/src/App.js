import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

const App = ({ history }) => {
  return (
    <div>
      <StylesProvider>
        <Router history={history}>
          <Switch></Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;
