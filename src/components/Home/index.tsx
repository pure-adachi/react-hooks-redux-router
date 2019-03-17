import * as React from "react";
import Menu from "../Menu";

const Home = () => {
  const [title, setTitle] = React.useState();
  const [body, setBody] = React.useState();

  React.useEffect(() => {
    setTitle("Home");
    setBody("Welcome to ようこそ");
  });

  return (
    <>
      <Menu />
      <h2>{title}</h2>

      <p>{body}</p>
    </>
  );
};

export default Home;
