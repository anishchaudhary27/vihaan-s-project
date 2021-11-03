import React from "react";
import Form from "./Form";
import Navigation from "./Navigation";

const Header = ({ history, handleSubmit, handleSubmit2 }) => {
  return (
    <div>
      <h1>SnapShot</h1>
      <Form history={history} handleSubmit={handleSubmit} handleSubmit2={handleSubmit2} />
      <Navigation />
    </div>
  );
};

export default Header;
