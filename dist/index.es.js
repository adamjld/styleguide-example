import React from 'react';

var TestComponent = function TestComponent() {
  return React.createElement("p", {
    style: {
      color: "green"
    }
  }, "This is my first component!");
};

var Button = function Button(props) {
  return React.createElement("button", null, props.children);
};

var Card = function Card() {
  return React.createElement("p", null, "This is my card!");
};

var CardGroup = function CardGroup() {
  return React.createElement("p", null, "This is my card group!");
};

export { TestComponent, Button, Card, CardGroup };
