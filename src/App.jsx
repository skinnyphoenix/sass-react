import { useState } from "react";
import "./App.css";
import "./App.scss";

function App() {
  return (
    <>
      <div className="container">
        <div className="headings__">
          <h1 className="heading1">Heading 1</h1>
          <h2 className="heading2">Heading 2</h2>
          <p className="paragraph__test">Paragraph</p>
          <div className="wrapper">Element max width test</div>
        </div>

        {/* <ul className="list1">
          <li>Lista 1</li>
          <li>Lista 2</li>
        </ul> */}
      </div>
      <div className="container__column">
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
      </div>
    </>
  );
}

export default App;
