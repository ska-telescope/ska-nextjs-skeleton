'use client';

import React from 'react';
import PageBanner from '@/components/layout/pageBanner/PageBanner';
import PageFooter from '@/components/layout/pageFooter/PageFooter';
import { Grid, Typography, Card, CardContent, CardActions, Button } from '@mui/material';

export default function Target() {

  return (
    <Grid container direction="column" alignItems="space-evenly" justifyContent="space-around" >
      <Grid item>
        <PageBanner title="Target" />
      </Grid>
      <Grid item>
        <Typography variant="h6" m={2}>
          DETAILS NEEDED : SARAH
        </Typography>
        <Grid container direction="row" alignItems="space-evenly" justifyContent="center" spacing={4}>
          <Grid item>
            <Grid item>
              <Card sx={{ width: 275, height: 140 }}>
                <CardContent>
                  <Typography variant="h5" color="text.secondary" align="center" gutterBottom>
                    No specific Target
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" align="center">
                    We&apos;re just going to look up
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          <Grid item>
            <Card sx={{ width: 275, height: 140 }}>
              <CardContent>
                <Typography variant="h5" color="text.secondary" align="center" gutterBottom>
                  List of Targets
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" align="center">
                  A list of target will be entered and/or imported from file
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item>
            <Grid item>
              <Card sx={{ width: 275, height: 140 }}>
                <CardContent>
                  <Typography variant="h5" color="text.secondary" align="center" gutterBottom>
                    Target Mosaic
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" align="center">
                    Using a tool to create a mosaic of targets
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <PageFooter previousPageLabel='science' previousPageURL='/proposal/science' nextPageLabel='observation' nextPageURL='/proposal/observation' />
        </Grid>
      </Grid>
    </Grid>
  );
}
