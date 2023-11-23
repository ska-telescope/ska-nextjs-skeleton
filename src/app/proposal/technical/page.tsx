'use client';

import React from 'react';
import { Grid, Typography } from '@mui/material';
import { DataContext } from '@/components/dataProvider/DataProvider.jsx';
import PageBanner from '@/components/pageBanner/PageBanner';
import PageFooter from '@/components/pageFooter/PageFooter';

export default function Title() {

  return (
    <Grid container direction="column" alignItems="space-evenly" justifyContent="space-around" >
      <Grid item>
        <PageBanner title="Technical"/>
      </Grid>
      <Grid item>
        <Typography variant="h6" m={2}>
          DETAILS NEEDED : JACK
        </Typography>
      </Grid>
      <Grid item>
        <PageFooter previousPageLabel='observation' previousPageURL='/proposal/observation' nextPageLabel='data' nextPageURL='/proposal/data' />
      </Grid>
    </Grid>
  );
}
