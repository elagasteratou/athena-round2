import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TableImpactfulFixes from './TableImpactfulFixes';

function ImpactfulFixes({ data }) {
  console.log('impact', data);
  return (
    <div>
      <div>
        <h1>🛠 Your most impactful fixes </h1>
        <TableImpactfulFixes data={data} />
        <h1>Replacing these could help you save </h1>
        <h2>+£121</h2>
        <h1>Bringing down your emissions by</h1>
        <h2>1.2 tonnes</h2>
      </div>
    </div>
  );
}

export default ImpactfulFixes;
