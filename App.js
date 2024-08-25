const headingReact = React.createElement("h1", {
    id: "heading",
    className: "abc"
}, "Hello from React!");
console.log("headingReact", headingReact);
const rootReact = ReactDOM.createRoot(document.getElementById("rootreact"));
rootReact.render(headingReact);
