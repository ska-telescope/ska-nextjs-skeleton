'use client';

import React from 'react';
import { Grid, Typography } from '@mui/material';
import PageBanner from '@/components/layout/pageBanner/PageBanner';
import PageFooter from '@/components/layout/pageFooter/PageFooter';

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
