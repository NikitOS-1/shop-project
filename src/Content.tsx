import style from "./Content.module.scss";

type ContentProps = {
  p1: string;
  p2: string;
};

const Content = ({ p1, p2 }: ContentProps) => {
  return (
    <>
      <p className={style.tomato}>{p1}</p>
      <p className={`${style.tomato} ${style.fs50}`}>{p2}</p>
    </>
  );
};

export default Content;
