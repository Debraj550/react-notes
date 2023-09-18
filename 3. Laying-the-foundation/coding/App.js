import React from "react";
import ReactDOM from "react-dom/client";

const Ttitle = () => {
  return <h1>This is a title.</h1>;
};

const HeadingComponent = () => {
  return (
    <div>
      <Ttitle />
      <h2>this is the heading</h2>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
