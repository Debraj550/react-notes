const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "its an h1 tag"),
    React.createElement("h2", {}, "its an h2 tag"),
  ])
);

const heading = React.createElement(
  "h1",
  { id: "heading", abc: "xyz" },
  "hello this is from react"
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
