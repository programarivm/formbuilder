import htmlTagInputTypes from 'constants/htmlTag/input/Types';
import { InputLabel, MenuItem, TextField, Select } from '@material-ui/core';

export default function Input({state}) {
  const handleInputChange = (event) => {
    state[event.target.name] = event.target.value;
  }

  return (
    <>
      <InputLabel>Type</InputLabel>
      <Select
        value={state.subtype}
        name="subtype"
        fullWidth
        required
        onChange={handleInputChange}
      >
        <MenuItem value="" disabled>
          Select a type
        </MenuItem>
        {Object.keys(htmlTagInputTypes).map((key, i) => (
          <MenuItem key={i} value={htmlTagInputTypes[key]}>
            {key.charAt(0) + key.substring(1).toLowerCase()}
          </MenuItem>
        ))}
      </Select>
      <TextField
        autoFocus
        margin="dense"
        name="label"
        label="Label"
        type="text"
        fullWidth
        required
        onChange={handleInputChange}
      />
      <TextField
        margin="dense"
        name="placeholder"
        label="Placeholder"
        type="text"
        fullWidth
        onChange={handleInputChange}
      />
    </>
  );
}
