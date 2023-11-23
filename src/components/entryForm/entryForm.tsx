'use client';

import React from 'react';
import { Box, Grid } from '@mui/material';
import { DropDown, NumberEntry, Status, TextEntry } from '@ska-telescope/ska-gui-components';

export default function EntryForm() {
  const STATUS_LEVEL = 1;
  const STATUS_SIZE = 50;
  const BOX_WIDTH = '15%';
  const DUMMY_OPTIONS = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  const [theNumber, setTheNumber] = React.useState(0);
  const [theText, setTheText] = React.useState('');
  const [theDropdown, setTheDropdown] = React.useState('');

  return (
    <Grid container direction="column" alignItems="center" justifyContent="space-around">
      <Box m={1} sx={{ width: BOX_WIDTH }}>
        <TextEntry label="Text Label" testId="textId" value={theText} setValue={setTheText} />
      </Box>

      <Box m={1} sx={{ width: BOX_WIDTH }}>
        <NumberEntry
          label="Number Label"
          testId="numberId"
          value={theNumber}
          setValue={setTheNumber}
        />
      </Box>

      <Box m={1} sx={{ width: BOX_WIDTH }}>
        <DropDown
          label="Dropdown Label"
          options={DUMMY_OPTIONS}
          testId="testId"
          setValue={setTheDropdown}
          value={theDropdown}
        />
      </Box>

      <Box m={1}>
        <Status
          level={STATUS_LEVEL}
          size={STATUS_SIZE}
          testId="statusId"
          text={STATUS_LEVEL.toString()}
        />
      </Box>
    </Grid>
  );
}
