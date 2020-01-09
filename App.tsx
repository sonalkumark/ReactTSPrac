import React from "react";
import HelloWorld1, { HelloWorld2, HelloWorld3 } from "./components/HelloWorld";
import Table from "./components/Table";
import TableData from "./components/TableData";
import PrintAsYouType from "./components/PrintAsYouType";
import MyTimer from "./components/MyTimer"

function App() {
  return (
    <div>
      <HelloWorld1 fname="Sonalkumar" lname="Kadelwar" />
      <HelloWorld2 />
      <HelloWorld3 fname="Sonalkumar" lname="Kadelwar" />
      <Table>
        <TableData />
      </Table>
      <PrintAsYouType />
      <MyTimer />
    </div>
  );
}
export default <App />;
