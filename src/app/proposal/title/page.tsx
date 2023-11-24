'use client';

import React from 'react';
import PageBanner from '@/components/layout/pageBanner/PageBanner';
import PageFooter from '@/components/layout/pageFooter/PageFooter';
import TitleContent from '@/components/titleContent/titleContent';
import { Grid } from '@mui/material';

export default function Title() {

  return (
    <Grid container direction="column" alignItems="space-evenly" justifyContent="space-around" >
      <Grid item>
        <PageBanner title="Title"/>
      </Grid>
      <Grid item>
        <TitleContent />
      </Grid>
      <Grid item>
        <PageFooter nextPageLabel='team' nextPageURL='/proposal/team' />
      </Grid>
    </Grid>
  );
}
