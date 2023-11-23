'use client';

import React from 'react';
import PageBanner from '@/components/pageBanner/PageBanner';
import PageFooter from '@/components/pageFooter/PageFooter';
import { Grid, Typography } from '@mui/material';

export default function Team() {

  return (
    <Grid container direction="column" alignItems="space-evenly" justifyContent="space-around" >
      <Grid item>
        <PageBanner title="Team"/>
      </Grid>
      <Grid item>
        <Typography variant="h6" m={2}>
          DETAILS NEEDED : CHLOE
        </Typography>
      </Grid>
      <Grid item>
        <PageFooter previousPageLabel='title' previousPageURL='/proposal/title' nextPageLabel='general' nextPageURL='/proposal/general' />
      </Grid>
    </Grid>
  );
}
