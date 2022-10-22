import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

// import Input from '@mui/material/Input';

export default function Form(onSubmit) {
  const [image, setImage] = useState();
  const [text, setText] = useState();
  const navigate = useNavigate();
  const onImageChange = (e) => setImage(e.target.files);
  const onTextChange = (e) => setText(e.target.value);
  const handleSubmit = () => {
    console.log('hi', text);
    navigate('/result');
  };

  return (
    <Box
      component="form"
      sx={{
        m: 1,
        width: '25ch',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Address"
        variant="outlined"
        onChange={onTextChange}
        sx={{ width: '100%' }}
      />
      <Button
        type="submit"
        onClick={handleSubmit}
        variant="contained"
        sx={{ marginTop: '40px' }}
      >
        Find out my ECG Rating
      </Button>
    </Box>
  );
}
