import React, { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import './App.css';
import MenuItem from '@mui/material/MenuItem';
import Welcome from './pages/Welcome';
import RatingResult from './pages/RatingResult';
import OurDiv from './components/OurDiv';
import { fakeData } from './Hooks/useGetData';

const div = {
  backgroundColor: 'lightBlue',
  padding: '10px',
  fontFamily: 'Arial',
  height: '650px',
  border: '2px solid red',
};

function App() {
  const [image, setImage] = useState();
  const [text, setText] = useState();
  const [postCode, setPostcode] = useState(false);
  const [address, setAddress] = useState();
  // const [data, setData] = useState({
  // findout what we are getting
  // });
  const [multiAddress, setMultiAddress] = useState();
  console.log('WAG1 FAM', fakeData['rows']);
  const onImageChange = (e) => setImage(e.target.files);
  const onTextChange = (e) => setText(e.target.value);

  const handleSubmit = (event, text) => {
    event.preventDefault();
    setPostcode(text);
    setMultiAddress(fakeData['rows']);
    console.log('hi', text);
    // get the url from BE and use it to get the image.
    // getRatingImage()
  };
  const handleChange = (e) => {
    console.log('get url here');
  };

  const getRatingImage = (url) => {
    console.log(url);
  };
  return (
    <div>
      <div style={div}>
        <Welcome />
      </div>
      <div style={div}>
        <Box
          component="div"
          sx={{
            p: 8,
            alignItems: 'center',
            justifySelf: 'center',
            height: '100%',
          }}
        >
          <div>
            <h1>Energy saving altneratives with just a picture</h1>
          </div>
          <p>Your address helps us generate a list of items you can replace</p>
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
            {postCode ? (
              <>
                <FormControl
                  sx={{
                    m: 1,
                    minWidth: 200,
                    maxWidth: 'fit-content',
                    alignContent: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Address
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={address}
                    onChange={handleChange}
                    fullWidth
                    label="Age"
                  >
                    {multiAddress &&
                      multiAddress.map((array) => (
                        <MenuItem value={array.address}>
                          {array.address}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </>
            ) : (
              <>
                <TextField
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                  onChange={onTextChange}
                  sx={{ width: '100%' }}
                />
                <Button
                  type="submit"
                  onClick={(event) => handleSubmit(event, text)}
                  variant="contained"
                  sx={{ marginTop: '40px' }}
                >
                  Find out my ECG Rating
                </Button>
              </>
            )}
          </Box>
        </Box>
      </div>
      <div style={div}>{/* <RatingResult /> */}</div>
    </div>
  );
}

export default App;
