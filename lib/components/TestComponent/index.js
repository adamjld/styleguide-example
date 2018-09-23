import React from 'react';

var TestComponent = function TestComponent() {
  return React.createElement("p", {
    style: {
      color: "green"
    }
  }, "This is my first component!");
};

export default TestComponent;