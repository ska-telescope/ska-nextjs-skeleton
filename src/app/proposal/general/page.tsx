'use client';

import React from 'react';
import PageBanner from '@/components/layout/pageBanner/PageBanner';
import PageFooter from '@/components/layout/pageFooter/PageFooter';
import { Grid, Typography } from '@mui/material';

export default function General() {

  return (
    <Grid container direction="column" alignItems="space-evenly" justifyContent="space-around" >
      <Grid item>
        <PageBanner title="General"/>
      </Grid>
      <Grid item>
        <Typography variant="h6" m={2}>
          DETAILS NEEDED : CHLOE
        </Typography>
      </Grid>
      <Grid item>
        <PageFooter previousPageLabel='team' previousPageURL='/proposal/team' nextPageLabel='science' nextPageURL='/proposal/science' />
      </Grid>
    </Grid>
  );
}
