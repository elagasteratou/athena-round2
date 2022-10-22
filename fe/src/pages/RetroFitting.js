import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const RetroFitting = () => (
  <div>
    <div>
      <h2>🏠 What is retrofitting?</h2>
      <p>Retrofitting is the process of making your house more energy-effecient by installing renewable and low carbon energy technologies.</p>
    </div>
    <div>
      <h2>💰 How can it help you save?</h2>
      <p>Buying a new appliance can help you save on energy bills as soon as 3 weeks! Our app will show you how retrofiting can help you save.</p>
      </div>
    <div>
      <h2>🌱How effective is it in improving my carbon footprint?</h2>
      <p>Almost 40% of the UK’s energy consumption and carbon emissions come from the way our buildings are heated and used. Even comparatively small changes in energy performance and the way a building is used will have a significant effect in reducing energy consumption.</p>
    </div>
    <Button
        type="submit"
        variant="contained"
        sx={{ marginTop: '40px' }}
    >
      Pick from our suggestions
    </Button>
    <div>
    <Button
        type="submit"
        variant="contained"
        sx={{ marginTop: '4px' }}
    >
      Scan your own items
    </Button>
    </div>
  </div>
);

export default RetroFitting;
