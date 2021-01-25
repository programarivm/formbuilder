import React from "react";
import { CardContent, Typography  } from '@material-ui/core';

const Select = ({ elem }) => {
  return (
    <CardContent>
      <Typography variant="h6" component="h3">
        <code>&lt;label&gt;{elem.label}&lt;/label&gt;</code>
      </Typography>
      <Typography variant="h6" component="h3">
        <code>
          &lt;select&gt;&lt;options&gt;TODO...&lt;/options&gt;&lt;/select&gt;
        </code>
      </Typography>
    </CardContent>
  );
};

export default Select;
