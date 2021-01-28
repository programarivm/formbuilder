import React from "react";
import { CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const Select = ({ elem }) => {
  return (
    <CardContent>
      <Typography gutterBottom variant="h6">
        Select
      </Typography>
      {elem.html}
    </CardContent>
  );
};

export default Select;
