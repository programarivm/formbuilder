import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { CardContent } from '@material-ui/core';
var HtmlToReactParser = require('html-to-react').Parser;

const useStyles = makeStyles((theme) => ({
  formGroup: {
    '& label': {
      width: '100%'
    },
    '& input': {
      width: '100%'
    }
  }
}));

const Input = ({ elem }) => {
  const classes = useStyles();
  const htmlToReactParser = new HtmlToReactParser();
  const reactElement = htmlToReactParser.parse(elem.html);

  return (
    <CardContent>
      <div className={classes.formGroup}>
        {reactElement}
      </div>
    </CardContent>
  );
};

export default Input;
