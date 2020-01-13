import React from "react";

export default function WrapWithBackground(InputComponent) {
  class BackgroundWrappedComponent extends React.Component {
    render() {
      return (
        <div style={{ background: "pink", padding: 30 }}>
          <InputComponent {...this.props} />
        </div>
      );
    }
  }
  return BackgroundWrappedComponent;
}
