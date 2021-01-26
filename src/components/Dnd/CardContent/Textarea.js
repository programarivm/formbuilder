import React from "react";
import { CardContent } from '@material-ui/core';
import HtmlTag from './HtmlTag';

const Textarea = ({ elem }) => {
  return (
    <CardContent>
      <HtmlTag name="label" text={elem.label} />
      <HtmlTag
        name="textarea"
        attr={{
          placeholder: elem.placeholder
        }}
      />
    </CardContent>
  );
};

export default Textarea;
