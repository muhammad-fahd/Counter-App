import React, { Component } from "react";
//stateless functional components
const Navbar = props => {
  const { totalCount, totalCountActive, countValue } = props;
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="navbar-brand">
        <div className="col-md-4">
          Total Count :{" "}
          <span className="badge badge-primary">{totalCount}</span>
        </div>
        <div>
          Active Count :{" "}
          <span className="badge badge-primary">{totalCountActive}</span>
        </div>

        <div>
          Count Value :{" "}
          <span className="badge badge-primary">{countValue}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
