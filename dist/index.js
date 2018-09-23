'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

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

exports.TestComponent = TestComponent;
exports.Button = Button;
exports.Card = Card;
exports.CardGroup = CardGroup;
