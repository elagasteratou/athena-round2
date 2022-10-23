import React, { useState, useRef } from 'react';

import useScrollSnap from 'react-use-scroll-snap';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import './App.css';
import MenuItem from '@mui/material/MenuItem';
import RetroFitting from './pages/RetroFitting';
import ImpactfulFixes from './pages/ImpactfulFixes';
import RatingResult from './pages/RatingResult';
import { fakeData, useGetData } from './Hooks/useGetData';

const div = {
  backgroundColor: 'white',
  padding: '10px',
  fontFamily: 'Inter',
  // border: '2px solid red',
  height: '667px',
  scrollMargin: '10px',
  scrollSnapAlign: 'start',
  scrollSnapStop: 'normal',
};

function App() {
  const [image, setImage] = useState();
  const [text, setText] = useState();
  const [postCode, setPostcode] = useState(false);
  const [address, setAddress] = useState();
  // const {response} = useGetData()
  const [data, setData] = useState({
    EPCcurrent: 0,
    EPCpotential: 0,
    heatingPotential: 0,
    heatingCurrent: 0,
    lightingCostPotential: 0,
    lightingCostCurrent: 0,
    windoeEnvEff: 0,
  });
  const [multiAddress, setMultiAddress] = useState();
  console.log('WAG1 FAM', fakeData['rows']);
  const onImageChange = (e) => setImage(e.target.files);
  const onTextChange = (e) => setText(e.target.value);
  const { response } = useGetData('http://localhost:8000/api/SampleTodos/');
  const handleSubmit = (event, text) => {
    event.preventDefault();
    setPostcode(text);
    setMultiAddress(fakeData['rows']);
    console.log('hi', text);
    // get the url from BE and use it to get the image.
    // getRatingImage()
  };
  const handleChange = (e) => {
    let myadd = e.target.value;
    let theData = Object.values(fakeData['rows']).filter(
      (item) => item['address'] === myadd
    )[0];
    setData({
      EPCcurrent: theData['current-energy-rating'],
      EPCpotential: theData['potential-energy-rating'],
      heatingPotential: theData['heating-cost-potential'],
      heatingCurrent: theData['heating-cost-current'],
      lightingCostPotential: theData['lighting-cost-potential'],
      lightingCostCurrent: theData['lighting-cost-current'],
      windoeEnvEff: theData['windows-env-eff'],
    });
    //  SEND TO JESSIe
    console.log('get url here', e.target.value);
  };
  console.log('useState', data);
  const getRatingImage = (url) => {
    // URL HOOK HERE
    console.log(url);
  };
  return (
    <div style={{ scrollSnapType: 'x mandatory' }}>
      <div style={div}>
        <Box
          component="div"
          sx={{
            p: 5,
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
      <div style={div}>{data && <RatingResult data={data} />}</div>
      <div style={div}>
        <RetroFitting />
      </div>
      <div style={div}>{data && <ImpactfulFixes data={data} />}</div>
      {/* <div>{console.log('real', response)}</div> */}
    </div>
  );
}

export default App;
