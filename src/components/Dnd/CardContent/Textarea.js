import React from "react";
import { CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
var HtmlToReactParser = require('html-to-react').Parser;

const Textarea = ({ elem }) => {
  const htmlToReactParser = new HtmlToReactParser();
  const reactElement = htmlToReactParser.parse(elem.html);

  return (
    <CardContent>
      <Typography gutterBottom variant="h6">
        Textarea
      </Typography>
      {reactElement}
    </CardContent>
  );
};

export default Textarea;
