import React from "react";
import { useHistory } from "react-router-dom";
import { mount } from "marketing/MarketingApp";

const MarketingApp = () => {
  const history = useHistory();
  const marketingRef = React.createRef(null);

  React.useEffect(() => {
    const { onContainerNavigationChange } = mount(marketingRef.current, {
      onNavigate: ({ pathname: nextPathName }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathName) {
          history.push(nextPathName);
        }
      },
    });

    history.listen(onContainerNavigationChange);
  }, [marketingRef]);

  return <div ref={marketingRef} />;
};

export default MarketingApp;
