import React from "react";
import { CardContent, Typography  } from '@material-ui/core';

const Textarea = ({ elem }) => {
  return (
    <CardContent>
      <Typography variant="h6" component="h3">
        <code>&lt;label&gt;{elem.label}&lt;/label&gt;</code>
      </Typography>
      <Typography variant="h6" component="h3">
        <code>
          &lt;{elem.type.toLowerCase()} placeholder="{elem.placeholder}" /&gt;
        </code>
      </Typography>
    </CardContent>
  );
};

export default Textarea;
