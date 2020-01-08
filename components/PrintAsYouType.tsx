import React from "react";

export default class PrintAsYouType extends React.Component {
  state = {
    input: ""
  };

  handleInputChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleInputChange} />
        <div>{this.state.input}</div>
      </div>
    );
  }
}
