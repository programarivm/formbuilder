import React from "react";
import { CardContent } from '@material-ui/core';
import HtmlTag from './HtmlTag';
import Typography from '@material-ui/core/Typography';

const Input = ({ elem }) => {
  return (
    <CardContent>
      <Typography gutterBottom variant="h6">
        Input
      </Typography>
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
