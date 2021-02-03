import React from 'react';
import { useDispatch } from "react-redux";
import { click as clickInput } from "actions/inputActions";
import { click as clickSelect } from "actions/selectActions";
import { click as clickTextarea } from "actions/textareaActions";
import { Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ListIcon from '@material-ui/icons/List';
import SubjectIcon from '@material-ui/icons/Subject';
import Link from 'next/link';

const MainListItems = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <ListItem button>
        <Link href="/">
          <ListItemText primary="About" />
        </Link>
      </ListItem>
      <Divider />
      <ListItem button onClick={() => dispatch(clickInput())}>
        <ListItemIcon>
          <TextFieldsIcon />
        </ListItemIcon>
        <ListItemText primary="Input" />
      </ListItem>
      <ListItem button onClick={() => dispatch(clickSelect())}>
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <ListItemText primary="Select" />
      </ListItem>
      <ListItem button onClick={() => dispatch(clickTextarea())}>
        <ListItemIcon>
          <SubjectIcon />
        </ListItemIcon>
        <ListItemText primary="Textarea" />
      </ListItem>
    </div>
  );
};

export default MainListItems;
