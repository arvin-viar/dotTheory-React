import React from "react";

import BackToHome from "../../components/BackToHome";
import ComponentDidCatch from "../../components/WhatsNew/ComponentDidCatch";
import ErrorBoundaries from "../../components/WhatsNew/ErrorBoundaries";
import Portals from "../../components/WhatsNew/Portals";
import SetState from "../../components/WhatsNew/SetState";
import Header from "../../components/WhatsNew/Header";

import "./whatsnew.scss"

const componentMap = {
  componentdidcatch: <ComponentDidCatch />,
  errorboundaries: <ErrorBoundaries />,
  portals: <Portals />,
  setstate: <SetState />,
};

const WhatsNew = ({ page }) => (
  <div className="page page-whatsnew">
    <BackToHome />
    <section>
      <div className="container">
        <Header />
        {componentMap[page.replaceAll('-', '')]}
      </div>
    </section>
  </div>
);

export default WhatsNew;
