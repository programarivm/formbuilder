import React from "react";
import { CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const Textarea = ({ elem }) => {
  return (
    <CardContent>
      <Typography gutterBottom variant="h6">
        Textarea
      </Typography>
      {elem.html}
    </CardContent>
  );
};

export default Textarea;
