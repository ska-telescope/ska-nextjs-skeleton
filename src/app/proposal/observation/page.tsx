'use client';

import React from 'react';
import { DataContext } from '../../../components/layout/dataProvider/DataProvider.jsx';
import AddObservationButton from '../../../components/button/addObservation/AddObservationButton';
import PageBanner from '../../../components/layout/pageBanner/PageBanner';
import PageFooter from '../../../components/layout/pageFooter/PageFooter';
import DataGridWrapper from '../../../components/wrappers/dataGridWrapper/dataGridWrapper';
import SensCalcButton from '../../../components/button/sensCalc/SensCalcButton';
import {
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from '@mui/material';
import useTheme from '@mui/material/styles/useTheme';

export default function Observation() {
  const { data } = React.useContext(DataContext);
  const theme = useTheme();

  const ClickFunction = () => {};

  const columnsObservations = [
    { field: 'array', headerName: 'Array', minWidth: 100 },
    { field: 'subarray', headerName: 'Subarray', minWidth: 200 },
    { field: 'linked', headerName: 'Linked Targets', minWidth: 200 },
    { field: 'type', headerName: 'Type', minWidth: 100 },
  ];
  const extendedColumnsObservations = structuredClone(columnsObservations);

  const columnsTargets = [
    { field: 'Name', headerName: 'Name', minWidth: 200 },
    { field: 'RA', headerName: 'Right Ascension ( hh:mm:ss:s )', minWidth: 300 },
    { field: 'Dec', headerName: 'Declination ( dd:mm:ss:s )', width: 300 },
  ];
  const extendedColumnsTargets = structuredClone(columnsTargets);

  return (
    <Grid container direction="column" alignItems="space-evenly" justifyContent="space-around">
      <Grid item>
        <PageBanner title="Observation" />
      </Grid>
      <Grid item>
        <Grid
          p={1}
          container
          direction="row"
          alignItems="space-evenly"
          justifyContent="space-around"
        >
          <Grid item xs={5}>
            <Grid
              container
              direction="column"
              alignItems="flex-start"
              justifyContent="space-around"
            >
              <Grid item pb={1}>
                <AddObservationButton />
              </Grid>
              <DataGridWrapper
                rows={data.Observation.list}
                extendedColumns={extendedColumnsObservations}
                height={450}
                rowClick={ClickFunction}
              />
            </Grid>
          </Grid>
          <Grid item xs={7}>
            <Card variant="outlined">
              <CardHeader
                action={<SensCalcButton />}
                title={
                  <Typography variant="h6">
                    Target List related to the selected Observation
                  </Typography>
                }
              />
              <CardContent>
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
                    />
                  }
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
                    />
                  }
                  label="Unlinked"
                  labelPlacement="end"
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                />
                <DataGridWrapper
                  rows={data.Targets.ListOfTargets.TargetItems}
                  extendedColumns={extendedColumnsTargets}
                  height={350}
                  rowClick={ClickFunction}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <PageFooter
          previousPageLabel="target"
          previousPageURL="/proposal/target"
          nextPageLabel="technical"
          nextPageURL="/proposal/technical"
        />
      </Grid>
    </Grid>
  );
}
