import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";

const MarketingApp = React.lazy(() => import("./components/MarketingApp"));
const AuthApp = React.lazy(() => import("./components/Auth"));

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <React.Suspense fallback={<h1>loading!!</h1>}>
          <Switch>
            <Route path="/auth" component={AuthApp} />
            <Route path="/" component={MarketingApp} />
          </Switch>
        </React.Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
