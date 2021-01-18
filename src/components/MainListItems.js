import React from 'react';
import { useDispatch } from "react-redux";
import { click as clickInput } from "../actions/inputActions";
import { click as clickTextarea } from "../actions/textareaActions";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ListIcon from '@material-ui/icons/List';
import SubjectIcon from '@material-ui/icons/Subject';

const MainListItems = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <ListItem button onClick={() => dispatch(clickInput())}>
        <ListItemIcon>
          <TextFieldsIcon />
        </ListItemIcon>
        <ListItemText primary="Input" />
      </ListItem>
      <ListItem button>
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
