import React from "react";
import { ReactDOM } from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "its an h1 tag"),
    React.createElement("h2", {}, "its an h2 tag"),
  ])
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
