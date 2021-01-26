import React from "react";

const HtmlTag = ({ name, attr, emptyAttr, text, closing, nonContainer }) => {
  let jsx = [];

  if (closing === true) {
    jsx.push(<code>&lt;/{name}&gt;</code>);
    return jsx;
  } else {
    jsx.push(<code>&lt;{name}</code>);
  }

  if (attr) {
    jsx.push(<code>{Object.keys(attr).map((item) => (
        <span style={{marginLeft: 10}}>{item}="{attr[item]}"</span>
    ))}</code>);
  }

  if (emptyAttr) {
    jsx.push(<code>{emptyAttr.map((item) => (
        <span style={{marginLeft: 10}}>{item}</span>
    ))}</code>);
  }

  if (nonContainer) {
    jsx.push(<code>&nbsp;/&gt;</code>);
    return jsx;
  } else if (text) {
    jsx.push(<code>&gt;</code>);
    jsx.push(<code>{text}</code>);
    jsx.push(<code>&lt;/{name}</code>);
  }

  jsx.push(<code>&gt;</code>);

  return <div>{jsx}<br/></div>;
};

export default HtmlTag;
