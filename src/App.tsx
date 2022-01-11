import React from "react";
import ReactDOM from "react-dom";
import ProductList from "./components/ProductList";
import "./index.css";

const App = () => {
  return (
    <>
      <ProductList />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
