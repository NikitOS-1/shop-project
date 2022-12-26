import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <>
      <p>test</p>
    </>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
