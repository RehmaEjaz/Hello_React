// const heading=document.createElement("h1");
// heading.innerHTML="Hello from Javascript";
// const root=document.getElementById("root");
// root.appendChild(heading);
const heading = React.createElement("h1", {id:"heading"}, "Hello from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
