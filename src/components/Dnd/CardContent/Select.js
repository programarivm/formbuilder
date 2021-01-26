import React from "react";
import { CardContent } from '@material-ui/core';
import HtmlTag from './HtmlTag';

const Select = ({ elem }) => {
  return (
    <CardContent>
      <HtmlTag
        name="label"
        text={elem.label}
      />
      <HtmlTag
        name="select"
      />
      <HtmlTag
        name="option"
        text={elem.placeholder}
        emptyAttr={ ['disabled', 'selected'] }
      />
      <div style={{ marginLeft: 10 }}>
        {(elem.options).map(option =>
          <HtmlTag name="option" text={option} />
        )}
      </div>
      <HtmlTag
        name="select"
        closing={true}
      />
    </CardContent>
  );
};

export default Select;
