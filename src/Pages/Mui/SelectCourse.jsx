import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelecCourse() {
  const [selectedCourse, setSelectedCourse] = React.useState(''); // State variable to store selected course

  const handleChange = (event) => {
    setSelectedCourse(event.target.value);
  };
  
  
  return (
    <FormControl sx={{ m: 1, width: '97%' }}>
      <Select
        value={selectedCourse} 
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value="">
          Select Course To Submit
        </MenuItem>
        <MenuItem value={20}>Operational Research</MenuItem>
        <MenuItem value={20}>Programming With VB</MenuItem>
        <MenuItem value={30}>Project Management</MenuItem>
      </Select>
    </FormControl>
  );
}