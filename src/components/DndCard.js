import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import dndTypes from '../constants/dnd/Types';
import { decreaseCount } from "../actions/counterActions";
import { del as deleteInput } from "../actions/inputActions";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import { del as deleteTextarea } from "../actions/textareaActions";
import { del as deleteSelect } from "../actions/selectActions";
import htmlTagTypes from '../constants/htmlTag/Types';
import { CardActions, CardContent, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const style = {
  border: "1px dashed gray",
  padding: "0.5rem 1rem",
  marginBottom: ".5rem",
  backgroundColor: "white",
  cursor: "move"
};

const DndCard = ({ label, type, placeholder, index, elem, moveCard }) => {
  const dispatch = useDispatch();

  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: dndTypes.CARD,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    }
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type: dndTypes.CARD, index },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  const opacity = isDragging ? 0 : 1;

  drag(drop(ref));

  const handleEdit = (event, elem) => {
    event.preventDefault();
    console.log('TODO ...');
  }

  const handleDelete = (event, elem) => {
    event.preventDefault();
    switch (elem.type) {
      case htmlTagTypes.INPUT:
        dispatch(deleteInput(elem.order));
        break;
      case htmlTagTypes.TEXTAREA:
        dispatch(deleteTextarea(elem.order));
        break;
      case htmlTagTypes.SELECT:
        dispatch(deleteSelect(elem.order));
        break;
      default:
        break;
    }

    dispatch(decreaseCount());
  }

  return (
    <Card ref={ref} style={{ ...style, opacity }}>
      <CardActionArea>
        <CardContent>
          <Typography variant="h5" component="h2">
            {label}
          </Typography>
          <Typography color="textSecondary">
            <code>&lt;{type.toLowerCase()}&gt;</code>
          </Typography>
          <Typography color="textSecondary">
            {placeholder}
          </Typography>
        </CardContent>
        <CardActions>
            <IconButton
              aria-label="edit"
              onClick={(e) => handleEdit(e, elem)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              onClick={(e) => handleDelete(e, elem)}
            >
              <DeleteIcon />
            </IconButton>
          </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default DndCard;
