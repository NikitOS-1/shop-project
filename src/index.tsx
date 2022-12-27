import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header/Header";

const App = () => {
  return <Header />;
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
