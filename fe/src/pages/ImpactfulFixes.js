import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TableImpactfulFixes from './TableImpactfulFixes';

const ImpactfulFixes = () => (
  <div>
    <div>
      <h1>🛠 Your most impactful fixes </h1>
      <TableImpactfulFixes />
      <h1>Replacing these could help you save </h1>
      <h2>+£121</h2>
      <h1>Bringing down your emissions by</h1>
      <h2>1.2 tonnes</h2>
    </div>
  </div>
);

export default ImpactfulFixes;
