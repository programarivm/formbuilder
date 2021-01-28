import React from "react";
import { CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const Input = ({ elem }) => {
  return (
    <CardContent>
      <Typography gutterBottom variant="h6">
        Input
      </Typography>
      {elem.html}
    </CardContent>
  );
};

export default Input;
