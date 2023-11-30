'use client';

import React from 'react';
import { Grid, Paper } from '@mui/material';
import NextPageButton from '@/components/button/nextPage/NextPageButton';
import PreviousPageButton from '@/components/button/previousPage/PreviousPageButton';

interface PageFooterProps {
  previousPageLabel?: string;
  previousPageURL?: string;
  nextPageLabel?: string;
  nextPageURL?: string;
}

export default function PageFooter({
  previousPageLabel = '',
  previousPageURL,
  nextPageLabel = '',
  nextPageURL,
}: PageFooterProps) {
  return (
    <Paper
      sx={{ bgcolor: 'transparent', position: 'fixed', bottom: 30, left: 0, right: 0 }}
      elevation={0}
    >
      <Grid
        p={1}
        container
        direction="row"
        alignItems="space-between"
        justifyContent="space-between"
      >
        <Grid item>
          {previousPageLabel?.length > 0 && (
            <PreviousPageButton label={previousPageLabel} url={previousPageURL} />
          )}
        </Grid>
        <Grid item></Grid>
        <Grid item>
          {nextPageLabel?.length > 0 && <NextPageButton label={nextPageLabel} url={nextPageURL} />}
        </Grid>
      </Grid>
    </Paper>
  );
}
