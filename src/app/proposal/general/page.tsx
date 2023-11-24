'use client';

import React from 'react';
import PageBanner from '@/components/layout/pageBanner/PageBanner';
import PageFooter from '@/components/layout/pageFooter/PageFooter';
import InfoPanel from '@/components/infoPanel/infoPanel';

import { Grid, Typography } from '@mui/material';

export default function General() {

  return (
    <Grid container direction="column" alignItems="space-evenly" justifyContent="space-around" >
      <Grid item>
        <PageBanner title="General"/>
      </Grid>
      <Grid p={1} item>
        <Typography variant="h6">
          DETAILS NEEDED : CHLOE
        </Typography>
        <InfoPanel title='TITLE' description='DESCRIPTION' additional='ADDITIONAL'/>
      </Grid>
      <Grid item>
        <PageFooter previousPageLabel='team' previousPageURL='/proposal/team' nextPageLabel='science' nextPageURL='/proposal/science' />
      </Grid>
    </Grid>
  );
}
