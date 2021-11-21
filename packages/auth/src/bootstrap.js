import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

const mount = (
  el,
  { onNavigate, defaultHistory, initialPath, onSignIn } = {}
) => {
  const history =
    defaultHistory || createMemoryHistory({ initialEntries: [initialPath] });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} onSignIn={onSignIn} />, el);

  return {
    onContainerNavigationChange: ({ pathname: nextPathname }) => {
      if (history.location.pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const app = document.getElementById("authApp");

  if (app) {
    mount(app, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
