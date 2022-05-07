import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

import MainHeader from "./MainHeader";
import GeneralHeader from "./GeneralHeader";

function Header({ history }) {
  const [element, setElement] = useState(<MainHeader />);

  useEffect(() => {
    if (history.location.pathname.length > 1) {
      setElement(<GeneralHeader />);
    }

    const unlisten = history.listen(() => {
      if (history.location.pathname.length > 1) {
        setElement(<GeneralHeader />);
      } else {
        setElement(<MainHeader />);
      }
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return element;
}

export default withRouter(Header);
