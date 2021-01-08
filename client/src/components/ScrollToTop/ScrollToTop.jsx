import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

export const ScrollToTop = withRouter(({ location }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return <React.Fragment />;
});
