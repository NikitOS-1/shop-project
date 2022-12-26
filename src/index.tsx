import React from "react";
import ReactDOM from "react-dom/client";
import Content from "./Content";

type TitleProps = {
  title: string;
  text?: string;
  id?: number | string;
};

const Title = ({ title, text = "TEST", id }: TitleProps) => {
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

const App = () => {
  return (
    <>
      <Title text="Hello" title=" React JS " id={`  ID : ${10}`} />
      <Title title=" React JS " id={`  ID : ${10}`} />
      <Content p1="p1" p2="p2" />
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
