'use client';

import React from 'react';
import { DataContext } from '@/components/layout/dataProvider/DataProvider.jsx';
import PageBanner from '@/components/layout/pageBanner/PageBanner';
import PageFooter from '@/components/layout/pageFooter/PageFooter';
import DataGridWrapper from '@/components/wrappers/dataGridWrapper/dataGridWrapper';
import SensCalcButton from '@/components/button/sensCalc/SensCalcButton';
import { Card, CardContent, CardHeader, Checkbox, FormControlLabel, Grid, Typography } from '@mui/material';
import useTheme from '@mui/material/styles/useTheme';

export default function Observation() {
  const { data } = React.useContext(DataContext);
  const theme = useTheme();

  const ClickFunction = () => {
  };

  const columnsObservations = [
    { field: 'id', headerName: 'Array', width: 100 },
    { field: 'title', headerName: 'Subarray', width: 200 },
    { field: 'pi', headerName: 'Linked Targets', width: 200 },
    { field: 'status', headerName: 'Observation Type', width: 100 }
  ];
  const extendedColumnsObservations = structuredClone(columnsObservations);

  const columnsTargets = [
    { field: 'Name', headerName: 'Name', width: 200 },
    { field: 'RA', headerName: 'Right Ascension ( hh:mm:ss:s )', width: 250 },
    { field: 'Dec', headerName: 'Declination ( dd:mm:ss:s )', width: 250 }
  ];
  const extendedColumnsTargets = structuredClone(columnsTargets);

  return (
    <Grid container direction="column" alignItems="space-evenly" justifyContent="space-around" >
      <Grid item>
        <PageBanner title="Observation"/>
      </Grid>
      <Grid item>
        <Grid p={1} container direction="row" alignItems="space-evenly" justifyContent="space-around" >
          <Grid item xs={5}>
            <Grid container direction="column" alignItems="center" justifyContent="space-around">
              <DataGridWrapper rows={data.ExistingProposal} extendedColumns={extendedColumnsObservations} height={500} rowClick={ClickFunction} />
            </Grid>
          </Grid>
          <Grid item xs={7}>
            <Card variant='outlined'>
              <CardHeader title={<Typography variant='body2'>Target List related to the selected Observation</Typography>} />
              <CardContent>
                <Grid container direction="row" alignItems="center" justifyContent="space-around">
                  <Grid item xs={3}>
                    <Grid container direction="column" alignItems="flex-start" justifyContent="space-between" >

                      <FormControlLabel
                        value="linked"
                        control={
                          <Checkbox
                            defaultChecked
                            sx={{
                              '&.Mui-checked': {
                                color: theme.palette.secondary.main,
                              },
                            }}
                          />}
                        label="Linked"
                        labelPlacement="end"
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                      />
                      <FormControlLabel
                        value="unlinked"
                        control={
                          <Checkbox
                            sx={{
                              '&.Mui-checked': {
                                color: theme.palette.secondary.main,
                              },
                            }}
                          />}
                        label="Unlinked"
                        labelPlacement="end"
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                      />

                      <SensCalcButton />
                    </Grid>
                  </Grid>
                  <Grid item >
                    <DataGridWrapper rows={data.Targets.ListOfTargets.TargetItems} extendedColumns={extendedColumnsTargets} height={407} rowClick={ClickFunction} />
                  </Grid>
                </Grid>
              </CardContent>

            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <PageFooter previousPageLabel='target' previousPageURL='/proposal/target' nextPageLabel='technical' nextPageURL='/proposal/technical' />
      </Grid>
    </Grid>
  );
}
