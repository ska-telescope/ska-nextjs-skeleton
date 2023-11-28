import React from 'react';
import { Grid, IconButton } from '@mui/material';
import { TextEntry } from '@ska-telescope/ska-gui-components';
import SearchIcon from '@mui/icons-material/Search';

interface SearchProps {
  value: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  setValue?: Function;

}

export default function SearchComponent({value, setValue }:SearchProps) {

  return (
    <Grid p={1} spacing={2} container direction="row" alignItems="center" justifyContent="flex-start">
      <Grid mt={3} item xs={1}>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Grid>
      <Grid item xs={10}>
        <TextEntry
          label="Search"
          // helperText="Enter your search term"
          testId="filterId"
          value={value}
          setValue={setValue}
        />
      </Grid>
    </Grid>
  );
};
