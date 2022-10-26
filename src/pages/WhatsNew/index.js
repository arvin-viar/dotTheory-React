import React from "react";

import BackToHome from "../../components/BackToHome";
import ComponentDidCatch from "../../components/WhatsNew/ComponentDidCatch";
import ErrorBoundaries from "../../components/WhatsNew/ErrorBoundaries";
import Portals from "../../components/WhatsNew/Portals";
import SetState from "../../components/WhatsNew/SetState";
import Header from "../../components/WhatsNew/Header";

import "./whatsnew.scss"

const WhatsNew = ({ page }) => (
  <div className="page page-whatsnew">
    <BackToHome />
    <section>
      <div className="container">
        <Header />
        {page === "component-did-catch" && (
          <ComponentDidCatch />
        )}
        {page === "error-boundaries" && (
          <ErrorBoundaries />
        )}
        {page === "portals" && (
          <Portals />
        )}
        {page === "set-state" && (
          <SetState />
        )}
      </div>
    </section>
  </div>
);

export default WhatsNew;
