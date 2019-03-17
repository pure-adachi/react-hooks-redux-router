import * as React from "react";
import "../../App.css";
import logo from "../../logo.svg";
import Menu from "../Menu";

const Abount = () => {
  const [title, setTitle] = React.useState();
  const [body, setBody] = React.useState();

  React.useEffect(() => {
    setTitle("How To React Router");
    setBody("Welcome to ようこそ");
  });

  return (
    <>
      <Menu />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{title}</p>
          <a
            className="App-link"
            href="https://bitbucket.org/puresystem/react-router/src/master/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {body}
          </a>
        </header>
      </div>
    </>
  );
};

export default Abount;
