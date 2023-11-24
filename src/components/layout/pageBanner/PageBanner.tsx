'use client';

import React from 'react';
import { Grid, Typography } from '@mui/material';
import HomeButton from '@/components/button/home/HomeButton';
import SaveButton from '@/components/button/save/SaveButton';
import StatusArray from '@/components/statusArray/StatusArray';
import SubmitButton from '@/components/button/Submit/SubmitButton';
import ValidateButton from '@/components/button/validate/ValidateButton';

interface PageBannerProps {
  addPage?: boolean;
  title?: string;
}

export default function PageBanner({addPage = false, title}:PageBannerProps) {

  return (
    <Grid p={1} pt={addPage ? 1 : 0} container direction="row" alignItems="center" justifyContent="space-around" >
      <Grid item xs={12}>
        <Grid container direction="row" alignItems="center" justifyContent="space-between" >
          <Grid item>
            <Grid container spacing={1} direction="row" alignItems="flex-end" justifyContent="space-between" >
              <Grid item>
                <HomeButton />
              </Grid>
              <Grid item>
                {!addPage && <SaveButton />}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            {!addPage && <StatusArray />}
          </Grid>
          <Grid item>
            <Grid container spacing={1} direction="row" alignItems="center" justifyContent="space-between" >
              <Grid item>
                {!addPage && <ValidateButton />}
              </Grid>
              <Grid item>
                {!addPage && <SubmitButton />}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="h6" m={2}>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body1" m={2}>
            In this space should be some sort of description as to the purpose of this page, including guidance, how to progress, etc
        </Typography>
      </Grid>
    </Grid>
  );
}
