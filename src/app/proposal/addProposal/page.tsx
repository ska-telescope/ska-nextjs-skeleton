'use client';

import React from 'react';
import { Grid } from '@mui/material';
import PageBanner from '@/components/layout/pageBanner/PageBanner';
import PageFooter from '@/components/layout/pageFooter/PageFooter';
import TitleContent from '@/components/titleContent/titleContent';

export default function Title() {
  return (
    <Grid container direction="column" alignItems="space-evenly" justifyContent="space-around">
      <Grid item>
        <PageBanner title="Title" addPage={true} />
      </Grid>
      <Grid item>
        <TitleContent />
      </Grid>
      <Grid item>
        <PageFooter nextPageLabel="create" nextPageURL="/proposal/team" />
      </Grid>
    </Grid>
  );
}
