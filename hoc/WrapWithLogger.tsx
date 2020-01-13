import React from 'react';

export default function withLogger(InputComponent) {
  console.log('in logger', this.props)
  class LogProps extends React.Component {
    componentDidMount() {
      console.log('my component is getting printed', this.props);
    }
    render() {
      return (
        <InputComponent {...this.props}/>
      );
    }
  }
  return LogProps;
}