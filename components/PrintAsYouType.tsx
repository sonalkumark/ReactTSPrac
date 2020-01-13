import React from "react";
import WrapWithBackground from "../hoc/WrapWithBackground";
import withLogger from "../hoc/WrapWithLogger";

class PrintAsYouType extends React.Component {
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
export default withLogger(WrapWithBackground(PrintAsYouType));