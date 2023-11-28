/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
'use client';

import React from 'react';
import { DataContext } from '@/components/layout/dataProvider/DataProvider.jsx';
import { Card, CardContent, Grid } from '@mui/material';
import { DropDown, TextEntry } from '@ska-telescope/ska-gui-components';

export default function TitleContent() {
  const { data } = React.useContext(DataContext);

  const [array, setArray] = React.useState(1);
  const [subarray, setSubarray] = React.useState('');
  const [band, setBand] = React.useState('');
  const [elevation, setElevation] = React.useState('');
  const [weather, setWeather] = React.useState('');
  const [obType, setObType] = React.useState(0);

  const arrNum = array - 1;

  return (
    <>
      <Card variant='outlined'>
        <CardContent>
          <Grid container direction="row" alignItems="center" justifyContent="space-evenly" spacing={2} >
            <Grid item xs={2} >
              <DropDown options={data.Observation.array} testId='{tt}' value={array} setValue={setArray} label='Array Configuration'  />
            </Grid>
            <Grid item xs={2} >
              {array && <DropDown options={data.Observation.array[arrNum].subarray} testId='{tt}' value={subarray} setValue={setSubarray} label='Subarray Configuration'  />}
            </Grid>
            <Grid item xs={2} >
              {array &&  data.Observation.array[arrNum].band && <DropDown options={data.Observation.array[arrNum].band} testId='{tt}' value={band} setValue={setBand} label='Observing Band'  />}
            </Grid>
            <Grid item xs={2} >
              <TextEntry
                label="Elevation"
                testId="elevationId"
                value={elevation}
                setValue={setElevation}
              />
            </Grid>
            <Grid item xs={2} >
              <TextEntry
                label="Weather"
                testId="weatherId"
                value={weather}
                setValue={setWeather}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card variant='outlined'>
        <CardContent>
          <Grid container direction="row" alignItems="center" justifyContent="space-evenly" spacing={2} >
            <Grid item xs={2} >
              <DropDown options={data.Observation.ObservationType} testId='{tt}' value={obType} setValue={setObType} label='Observation Type'  />
            </Grid>
            <Grid item xs={2} >
            </Grid>
            <Grid item xs={2} >
            </Grid>
            <Grid item xs={2} >
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}