'use client';

import React from 'react';
import PageBanner from '@/components/layout/pageBanner/PageBanner';
import PageFooter from '@/components/layout/pageFooter/PageFooter';
import { Grid, Typography } from '@mui/material';

export default function Data() {

  return (
    <Grid container direction="column" alignItems="space-evenly" justifyContent="space-around" >
      <Grid item>
        <PageBanner title="Data"/>
      </Grid>
      <Grid item>
        <Typography variant="h6" m={2}>
          DETAILS NEEDED : ??????
        </Typography>
      </Grid>
      <Grid item>
        <PageFooter previousPageLabel='technical' previousPageURL='/proposal/technical' />
      </Grid>
    </Grid>
  );
}

