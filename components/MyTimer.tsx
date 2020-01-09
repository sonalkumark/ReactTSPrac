import React from "react";

export default class MyTimer extends React.Component {
  state = {
    date: new Date().toTimeString()
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date().toTimeString()
      });
    }, 1000);
  }
  render() {
    return <div>{this.state.date}</div>;
  }
}
