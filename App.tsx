import React from "react";
import HelloWorld1, { HelloWorld2, HelloWorld3 } from "./components/HelloWorld";
import Table from "./components/Table";
import TableData from "./components/TableData";
import PrintAsYouType from "./components/PrintAsYouType";
import FocusInputOnClick from "./components/FocusInputOnClick";
import Forms from "./components/Forms";
import "./style.css";

function App() {
  return (
    <div>
      <PrintAsYouType />
      <HelloWorld1 fname="sonalkumar" lname="kadelwar" />
    </div>
  );
}
export default <App />;
