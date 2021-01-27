import React from "react";
import { CardContent } from '@material-ui/core';
import HtmlTag from './HtmlTag';
import Typography from '@material-ui/core/Typography';

const Textarea = ({ elem }) => {
  return (
    <CardContent>
      <Typography gutterBottom variant="h6">
        Textarea
      </Typography>
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
