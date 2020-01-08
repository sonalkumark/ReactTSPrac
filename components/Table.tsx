import React from "react";

export default function Table({ children }) {
  return (
    <React.Fragment>
      <table>{children}</table>
    </React.Fragment>
  );
}
