import React from "react";
// Using Simple Ref
// export default class FocusInputOnClick extends React.Component {
//   myInputRef = React.createRef();
//   handleOnClick = () => {
//     console.log(this.myInputRef);
//     this.myInputRef.current.focus();
//   };
//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           ref={this.myInputRef}
//           placeholder="focus the text input"
//         />
//         <button onClick={this.handleOnClick}>CLick</button>
//       </div>
//     );
//   }
// }

// export default function FocusInputOnClick() {
//   let inputRef = React.createRef();
//   function handleOnClick() {
//     inputRef.current.focus();
//   }
//   return (
//     <div>
//       <input
//           type="text"
//           ref={inputRef}
//           placeholder="focus the text input"
//         />
//         <button onClick={handleOnClick}>CLick</button>
//     </div>
//   );
// }

// using CallbackRef
export default class FocusInputOnClick extends React.Component {
  state = {
    myObject: ""
  }
  constructor(props) {
    super(props);
    // this.handleOnClick = this.handleOnClick.bind(this);
  }
  myInputRef;
  handleOnClick = () => {
    console.log(this.myInputRef);
    this.myInputRef.focus();
  };

  myParamToObject = (paramString) => {
    const myRegex = /^([\w-]+:[\w-_]+)+$/g;
    let keyValueArray = paramString.match(myRegex);
    let keyValueObject = {};
    keyValueArray && keyValueArray.forEach(keyValue => {
      const key = keyValue.split(":")[0];
      const value = keyValue.split(":")[1];
      keyValueObject[key] = value;
    });
    return keyValueObject;
  }
  handleInputChange = ($event) => {
    const value = $event.target.value;
    console.log(value);
    this.setState({ myObject: this.myParamToObject(value)});
  }
  render() {
    return (
      <div>
        <input
          type="text"
          ref={handle => (this.myInputRef = handle)}
          placeholder="focus the text input"
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleOnClick}>CLick</button>
        <div><p>{this.state.myObject}</p></div>
      </div>
    );
  }
}

// export default function FocusInputOnClick() {
//   let inputHandle;
//   function handleOnClick() {
//     inputHandle.focus();
//   }
//   return (
//     <div>
//       <input
//           type="text"
//           ref={handle => inputHandle=handle}
//           placeholder="focus the text input"
//         />
//         <button onClick={handleOnClick}>CLick</button>
//     </div>
//   );
// }