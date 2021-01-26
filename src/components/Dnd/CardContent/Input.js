import React from "react";
import { CardContent } from '@material-ui/core';
import HtmlTag from './HtmlTag';

const Input = ({ elem }) => {
  return (
    <CardContent>
      <HtmlTag name="label" text={elem.label} />
      <HtmlTag
        name="input"
        attr={{
          type: elem.subtype,
          placeholder: elem.placeholder
        }}
        nonContainer={true}
      />
    </CardContent>
  );
};

export default Input;
