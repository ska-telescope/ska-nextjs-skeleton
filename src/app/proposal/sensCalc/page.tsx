'use client';

import React from 'react';
import PageBanner from '@/components/layout/pageBanner/PageBanner';
import PageFooter from '@/components/layout/pageFooter/PageFooter';
import { Grid, Typography } from '@mui/material';
import DataGridWrapper from '../../../components/wrappers/dataGridWrapper/dataGridWrapper';
import { DataContext } from '@/components/layout/dataProvider/DataProvider.jsx';

export default function SensCalc() {
  const { data } = React.useContext(DataContext);

  const columns = [
    { field: 'Name', headerName: 'Name', minWidth: 200 },
    { field: 'RA', headerName: 'Right Ascension', minWidth: 150 },
    { field: 'Dec', headerName: 'Declination', width: 150 },
    { field: 'sc1', headerName: 'Weighted continuum sensitivity', width: 300 },
    { field: 'sc2', headerName: 'Continuum synthesized beam', width: 300 },
    { field: 'sc3', headerName: 'Continuum surface-brightness sensitivity', width: 300 },
  ];

  const extendedColumns = structuredClone(columns);

  const ClickFunction = () => {};

  return (
    <Grid container direction="column" alignItems="space-evenly" justifyContent="space-around">
      <Grid item>
        <PageBanner title="Sensitivity Calculator" />
      </Grid>
      <Grid item>
        <Grid container direction="row" alignItems="center" justifyContent="center">
          <Typography variant="body1" m={2}>
            Observation
          </Typography>
          <Typography variant="h6" m={2}>
            <strong>Some observation identifier</strong>
          </Typography>
        </Grid>
      </Grid>
      <Grid p={2} item>
        <DataGridWrapper
          rows={data.Targets.ListOfTargets.TargetItems}
          extendedColumns={extendedColumns}
          height={400}
          rowClick={ClickFunction}
        />
      </Grid>
      <Grid item>
        <PageFooter nextPageLabel="observations" nextPageURL="/proposal/observation" />
      </Grid>
    </Grid>
  );
}
