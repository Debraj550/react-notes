const heading = React.createElement(
  "h1",
  { id: "heading", abc: "xyz" },
  "hello this is from react"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
