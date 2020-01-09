import React from "react";

export default function Table({ children }) {
  return (
    <React.Fragment>
      <table><tbody>{children}</tbody></table>
    </React.Fragment>
  );
}
