'use client';

import React from 'react';
import PageBanner from '@/components/pageBanner/PageBanner';
import PageFooter from '@/components/pageFooter/PageFooter';
import { Grid, Typography } from '@mui/material';

export default function Observation() {

  return (
    <Grid container direction="column" alignItems="space-evenly" justifyContent="space-around" >
      <Grid item>
        <PageBanner title="Observation"/>
      </Grid>
      <Grid item>
        <Typography variant="h6" m={2}>
          DETAILS NEEDED : ??????
        </Typography>
      </Grid>
      <Grid item>
        <PageFooter previousPageLabel='target' previousPageURL='/proposal/target' nextPageLabel='technical' nextPageURL='/proposal/technical' />
      </Grid>
    </Grid>
  );
}

