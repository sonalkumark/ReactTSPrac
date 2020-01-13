import ReactDOM from "react-dom";
import app from "./App";
let myObj = {
  firstName: 'sonalkumar',
  lastName: 'kadelwar',
  salary: 123456,
  address: 'nanded'
};
const { firstName: fname, lastName: lname, ...rest} = myObj;
console.log(fname);
console.log(lname);
console.log(rest);
ReactDOM.render(app, document.getElementById("root"));
