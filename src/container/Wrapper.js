import React from "react";
import MainTable from "../components/MainTable";
import "./Wrapper.css";

const Wrapper = ({ data }) => {
  return (
    <div>
      <div className="header"> </div>
      <MainTable data={data} />
      <div className="footer"></div>
    </div>
  );
};

export default Wrapper;
