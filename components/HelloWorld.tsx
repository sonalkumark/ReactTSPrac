import React from "react";
import WrapWithBackground from '../hoc/WrapWithBackground';
import withLogger from "../hoc/WrapWithLogger";
function getName(fname, lname) {
  return fname + " " + lname;
}
function HelloWorld1({ fname, lname }) {
  return <div>Hello {getName(fname, lname)}</div>;
}
// OR
const HelloWorld2 = () => <div>Hello World</div>;
// OR
const HelloWorld3 = ({ fname, lname }) => {
  return <div>Hello {getName(fname, lname)}</div>;
};

export default withLogger(WrapWithBackground(HelloWorld1));
export { HelloWorld2, HelloWorld3 };
