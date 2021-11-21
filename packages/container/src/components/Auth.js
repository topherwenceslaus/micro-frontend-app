import React from "react";
import { useHistory } from "react-router-dom";
import { mount } from "auth/AuthApp";

const AuthApp = ({ onSignIn }) => {
  const history = useHistory();
  const authRef = React.createRef(null);

  React.useEffect(() => {
    const { onContainerNavigationChange } = mount(authRef.current, {
      onNavigate: ({ pathname: nextPathName }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathName) {
          history.push(nextPathName);
        }
      },
      initialPath: history.location.pathname,
      onSignIn: () => {
        onSignIn();
      },
    });

    history.listen(onContainerNavigationChange);
  }, [authRef]);

  return <div ref={authRef} />;
};

export default AuthApp;
