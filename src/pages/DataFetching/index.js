import React from "react";

import BackToHome from "../../components/BackToHome";
import PageNav from "../../components/PageNav";
import FetchAPI from "../../components/DataFetching/FetchAPI";
import Axios from "../../components/DataFetching/Axios";
import Search from "../../components/DataFetching/Search";

import "./dataFetching.scss"

const DataFetching = ({ page }) => {
  const navData = [
    {
      path: "/datafetching/fetch-api",
      title: "Fetch API"
    },
    {
      path: "/datafetching/axios",
      title: "Axios"
    },
    {
      path: "/datafetching/search",
      title: "Search"
    },
  ];

  return (
    <div className="page page-data-fetching">
      <BackToHome />
      <section>
        <div className="container">
          <PageNav navData={navData} />
          {page === "fetch-api" && (
            <FetchAPI title="Fetch API" />
          )}
          {page === "axios" && (
            <Axios title="Axios" />
          )}
          {page === "search" && (
            <Search title="Search" />
          )}
        </div>
      </section>
    </div>
  );
};

export default DataFetching;
