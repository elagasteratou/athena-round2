import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const first = {
  width: '256px',
  height: '56px',
  top: '258px',
  background: '#40A080',
  borderRadius: '0px 30px 30px 0px',
  textAlign: 'right',
  marginLeft: '-10px',
};
const second = {
  width: '256px',
  height: '56px',
  marginLeft: '-10px',
  top: '258px',
  background: ' #C0C08080',
  borderRadius: '0px 30px 30px 0px',
  textAlign: 'right',
};
const third = {
  width: '122px',
  height: '120px',
  left: '32px',
  top: '539px',
  background: '#6FCF97',
  borderRadius: '100%',
};
const textStyles = {
  color: 'white',
  paddingTop: '300px',
  marginRight: '40px',
  fontSize: '45px',
};
function RatingResult({ data }) {
  console.log('what is a gwarn', data.EPCcurrent);
  return (
    <>
      <div>
        <h1>Your household's energy stats</h1>
        <div style={first}>
          <span style={textStyles}>{data?.['EPCcurrent']}</span>
        </div>
      </div>
      <div>
        <h2>Your potential ECP</h2>
        <div style={second}>
          <span style={textStyles}>{data?.['EPCpotential']}</span>
        </div>
        <h2>Your ECP rating</h2>
      </div>
      <div>
        <h3>
          EPC ratings are ranked from A being most energy efficent to G being
          the least
        </h3>
        <div style={third}></div>
        <h3>You can save</h3>
        <h3>£121</h3>
        <h3>through retrofitting</h3>
      </div>
      <Button variant="contained">
        Let’s retrofit to bump up your rating!
      </Button>
    </>
  );
}

export default RatingResult;
