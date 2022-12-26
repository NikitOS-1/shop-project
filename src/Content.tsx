type ContentProps = {
  p1: string;
  p2: string;
};

const Content = ({ p1, p2 }: ContentProps) => {
  return (
    <>
      <p>{p1}</p>
      <p>{p2}</p>
    </>
  );
};

export default Content;
