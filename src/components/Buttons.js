import { useDispatch } from "react-redux";
import { click as clickInput } from "actions/inputActions";
import { click as clickSelect } from "actions/selectActions";
import { click as clickTextarea } from "actions/textareaActions";
import { Button, ButtonGroup } from '@material-ui/core';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ListIcon from '@material-ui/icons/List';
import SubjectIcon from '@material-ui/icons/Subject';

const Buttons = () => {
  const dispatch = useDispatch();

  return (
    <ButtonGroup>
      <Button
        variant="contained"
        color="default"
        startIcon={<TextFieldsIcon />}
        onClick={() => dispatch(clickInput())}
      >
        Input
      </Button>
      <Button
        variant="contained"
        color="default"
        startIcon={<ListIcon />}
        onClick={() => dispatch(clickSelect())}
      >
        Select
      </Button>
      <Button
        variant="contained"
        color="default"
        startIcon={<SubjectIcon />}
        onClick={() => dispatch(clickTextarea())}
      >
        Textarea
      </Button>
    </ButtonGroup>
  );
};

export default Buttons;
