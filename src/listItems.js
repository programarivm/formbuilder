import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ListIcon from '@material-ui/icons/List';
import SubjectIcon from '@material-ui/icons/Subject';

export const mainListItems = (
  <div>
    <ListItem button>
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
    <ListItem button>
      <ListItemIcon>
        <SubjectIcon />
      </ListItemIcon>
      <ListItemText primary="Textarea" />
    </ListItem>
  </div>
);
