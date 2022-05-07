import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

import landingExcludedRoutes from "../config/landingExcludedRoutes";

import GeneralLanding from "./GeneralLanding";

const LandingPage = ({ history }) => {
  const [category, setCategory] = useState("");
  const [element, setElement] = useState(null);
  useEffect(() => {
    if (history.location.pathname.length > 1) {
      setCategory(history.location.pathname.slice(1));
      setElement(<GeneralLanding category={category} />);

      const eStartsWith = landingExcludedRoutes.filter((ele) =>
        history.location.pathname.slice(1).startsWith(ele)
      );

      if (eStartsWith.length > 0) {
        setElement(null);
      }
    }

    const unlisten = history.listen(() => {
      setCategory(history.location.pathname.slice(1));
      setElement(<GeneralLanding category={category} />);

      const eStartsWith = landingExcludedRoutes.filter((ele) =>
        history.location.pathname.slice(1).startsWith(ele)
      );

      if (history.location.pathname.length === 1 || eStartsWith.length > 0) {
        setElement(null);
      }
    });

    return () => {
      unlisten();
    };
  }, [history, category]);

  return element && <GeneralLanding category={category} />;
};

export default withRouter(LandingPage);
