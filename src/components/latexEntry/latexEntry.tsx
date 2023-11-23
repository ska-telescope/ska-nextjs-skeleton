/* eslint-disable @typescript-eslint/ban-types */
'use client';

import React from 'react';
import { Grid, IconButton, Tooltip } from '@mui/material';
import { TextEntry } from '@ska-telescope/ska-gui-components';
import PreviewIcon from '@mui/icons-material/Preview';

interface LatexEntryProps {
  value: string;
  setValue?: Function;
  setModal?: Function;

}

export default function LatexEntry({value, setValue, setModal}:LatexEntryProps) {

  return (
    <Grid
      container
      direction="row"
      alignItems="flex-start"
      justifyContent="space-evenly"
    >
      <Grid item>
        <TextEntry
          label="Latex Input"
          testId="latexId"
          rows={20}
          value={value}
          setValue={setValue}
        />
      </Grid>
      <Grid item>
        <Tooltip title="LeTeX Display" arrow>
          <IconButton
            aria-label="DUMMY"
            sx={{ '&:hover': { backgroundColor: 'primary.dark' }, ml: 1 }}
            onClick={() => setModal ? setModal() : null}
            color="inherit"
          >
            <PreviewIcon/>
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
}