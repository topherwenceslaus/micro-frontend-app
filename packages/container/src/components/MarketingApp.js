import React from "react";
import { mount } from "marketing/MarketingApp";

const MarketingApp = () => {
  const marketingRef = React.createRef(null);

  React.useEffect(() => {
    mount(marketingRef.current);
  }, [marketingRef]);

  return <div ref={marketingRef} />;
};

export default MarketingApp;
