import { useState } from "react";
import "./App.css";
import "./App.scss";
import Buttons from "./components/Buttons";
import Toggle from "./components/Toggle";
import InputText from "./components/Form";
import InputPassword from "./components/Form/InputPassword";
import Select from "./components/Form/Select";
import Header from "./components/Header";

function App() {
  return (
    <>
      {/* <div className="container">
        <div className="headings__">
          <h1 className="heading1">Heading 1</h1>
          <h2 className="heading2">Heading 2</h2>
          <p className="paragraph__test">Paragraph</p>
          <div className="wrapper">Element max width test</div>
        </div> */}
      {/* <ul className="list1">
          <li>Lista 1</li>
          <li>Lista 2</li>
        </ul> */}
      {/* </div> */}
      {/* <div className="container__column">
        <div className="wrapperColumn">
          <div className="col-1">Col-1</div>
          <div className="col-1">Col-1</div>
          <div className="col-1">Col-1</div>
          <div className="col-1">Col-1</div>
          <div className="col-1">Col-1</div>
          <div className="col-1">Col-1</div>
          <div className="col-1">Col-1</div>
          <div className="col-1">Col-1</div>
          <div className="col-1">Col-1</div>
          <div className="col-1">Col-1</div>
        </div>
        <div className="wrapperColumn__2">
          <div className="col-2">Col-2</div>
          <div className="col-2">Col-2</div>
          <div className="col-2">Col-2</div>
          <div className="col-2">Col-2</div>
          <div className="col-2">Col-2</div>
          <div className="col-2">Col-2</div>
          <div className="col-2">Col-2</div>
          <div className="col-2">Col-2</div>
          <div className="col-2">Col-2</div>
          <div className="col-2">Col-2</div>
        </div>

        <div className="wrapperColumn__3">
          <div className="col-3">Col-3</div>
          <div className="col-3">Col-3</div>
          <div className="col-3">Col-3</div>
          <div className="col-3">Col-3</div>
          <div className="col-3">Col-3</div>
          <div className="col-3">Col-3</div>
          <div className="col-3">Col-3</div>
          <div className="col-3">Col-3</div>
          <div className="col-3">Col-3</div>
          <div className="col-3">Col-3</div>
        </div>
      </div> */}
      {/* <h3>Buttons</h3>
      <Buttons label="Go to" icon iconLeft fill size="xl" />
      <Buttons label="Go to" icon iconLeft fill size="md" />
      <Buttons label="Go to" icon iconLeft fill size="sm" />

      <Toggle /> */}

      {/* <InputText
        id={"name"}
        name="Insert your name here"
        placeholder="Your Name"
        label={"Insert your name here"}
        errorMessage={"Please, insert your name correctly."}
        error={false}
      />

      <InputPassword
        id={"password"}
        name="Insert your password here"
        placeholder="Insert your password here"
        label={"Insert your password here"}
        errorMessage={"Wrong Password"}
        error={false}
      />

      <Select /> */}

      <Header />
    </>
  );
}

export default App;
