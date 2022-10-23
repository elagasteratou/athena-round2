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
const text = {
  color: 'black',
  marginLeft: '25px',
  marginRight: '40px',
  fontSize: '15px',
  display: 'block',
};
function RatingResult({ data }) {
  console.log('what is a gwarn', data.EPCcurrent);
  return (
    <>
      <div>
        <h2>Your household's energy stats</h2>
        <div style={first}>
          <span style={textStyles}>{data?.['EPCcurrent']}</span>
        </div>
      </div>
      <div>
        <h3>Your potential ECP</h3>
        <div style={second}>
          <span style={textStyles}>{data?.['EPCpotential']}</span>
        </div>
        <h3>Your ECP rating</h3>
      </div>
      <div>
        <h4>
          EPC ratings are ranked from A being most energy efficent to G being
          the least
        </h4>
        <div style={third}>
          <div style={text}>
            <h3>
              You can save
              <br />
              <strong>
                £121 <br />
              </strong>
              through retrofitting
            </h3>
          </div>
        </div>
      </div>
      <Button variant="contained">
        Let’s retrofit to bump up your rating!
      </Button>
    </>
  );
}

export default RatingResult;
