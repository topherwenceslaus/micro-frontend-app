import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";

const MarketingApp = React.lazy(() => import("./components/MarketingApp"));
const AuthApp = React.lazy(() => import("./components/Auth"));

const App = () => {
  const [isSignedIn, setIsSignedIn] = React.useState(false);

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  return (
    <BrowserRouter>
      <div>
        <Header
          onSignOut={() => {
            setIsSignedIn(false);
          }}
          isSignedIn={isSignedIn}
        />
        <React.Suspense fallback={<h1>loading!!</h1>}>
          <Switch>
            <Route path="/auth">
              <AuthApp isSignedIn={isSignedIn} onSignIn={handleSignIn} />
            </Route>
            <Route path="/">
              <MarketingApp isSignedIn={isSignedIn} onSignIn={handleSignIn} />
            </Route>
          </Switch>
        </React.Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
