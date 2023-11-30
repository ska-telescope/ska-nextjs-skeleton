'use client';

import React from 'react';
import { Grid } from '@mui/material';
import PageBanner from '@/components/layout/pageBanner/PageBanner';
import PageFooter from '@/components/layout/pageFooter/PageFooter';
import ObservationContent from '@/components/observationContent/observationContent';

export default function Title() {
  return (
    <Grid container direction="column" alignItems="space-evenly" justifyContent="space-around">
      <Grid item>
        <PageBanner title="Observation" addPage={true} />
      </Grid>
      <Grid item>
        <ObservationContent />
      </Grid>
      <Grid item>
        <PageFooter
          previousPageLabel="Back"
          previousPageURL="/proposal/observation"
          nextPageLabel="create"
          nextPageURL="/proposal/observation"
        />
      </Grid>
    </Grid>
  );
}
