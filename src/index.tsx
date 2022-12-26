import React from "react";
import ReactDOM from "react-dom/client";

type TitleProps = {
  title: string;
  text?: string;
  id?: number | string;
};

const Title = ({ title, text, id }: TitleProps) => {
  return (
    <>
      <h1>
        {text}
        {title}
        {id}
      </h1>
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
      <Title text="Hello" title=" React JS " id={`  ID : ${10}`} />
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
