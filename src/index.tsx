import React from "react";
import ReactDOM from "react-dom/client";

type TitleProps = {
  title: string;
};

const Title = (props: TitleProps) => {
  return (
    <>
      <h1>Hello{props.title}</h1>
    </>
  );
};
const Content = () => {
  return (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti totam
      eveniet atque, voluptate, provident magnam vel veritatis facilis
      voluptates numquam debitis sed quos modi quas animi veniam commodi labore
      nisi.
    </p>
  );
};

const App = () => {
  return (
    <>
      <Title title=" React JS" />
      <Title title=" React NodeJs" />
      <Title title=" bla" />
      <Content />
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
