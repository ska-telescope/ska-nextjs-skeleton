/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
'use client';

import React from 'react';
import { DataContext } from '@/components/layout/dataProvider/DataProvider.jsx';
import { Card, CardContent, Grid } from '@mui/material';
import { DropDown, TextEntry } from '@ska-telescope/ska-gui-components';
import InfoPanel from '@/components/infoPanel/infoPanel';

export default function TitleContent() {
  const { data } = React.useContext(DataContext);

  const [array, setArray] = React.useState(1);
  const [subarray, setSubarray] = React.useState('');
  const [band, setBand] = React.useState('');
  const [elevation, setElevation] = React.useState('');
  const [weather, setWeather] = React.useState('');
  const [obType, setObType] = React.useState(0);
  const [frequency, setFrequency] = React.useState('');
  const [weighting, setWeighting] = React.useState(0);
  const [tapering, setTapering] = React.useState(0);
  const [sensitivity, setSensitivity] = React.useState(0);
  const [sensitivity2, setSensitivity2] = React.useState('');
  const [bandwidth, setBandwidth] = React.useState(0);
  const [averaging, setAveraging] = React.useState(0);
  const [robust, setRobust] = React.useState(0);

  const arrNum = array - 1;

  return (
    <>
      <Card variant='outlined' sx={{ border: 'none' }}>
        <CardContent>
          <Grid container direction="row" alignItems="center" justifyContent="space-evenly" spacing={2} >
            <Grid item xs={2} >
              <Grid container direction="column" alignItems="center" justifyContent="space-evenly"  >
                <DropDown options={data.Observation.array} testId='{tt}' value={array} setValue={setArray} label='Array Configuration'  />
                {array && <DropDown options={data.Observation.array[arrNum].subarray} testId='{tt}' value={subarray} setValue={setSubarray} label='Subarray Configuration'  />}
              </Grid>
            </Grid>

            <Grid item xs={2} >
              <Grid container direction="column" alignItems="center" justifyContent="flex-start"  >
                {array &&  data.Observation.array[arrNum].band && <DropDown options={data.Observation.array[arrNum].band} testId='{tt}' value={band} setValue={setBand} label='Observing Band'  />}
                <Grid item />
              </Grid>
            </Grid>

            <Grid item xs={4} >
              <Grid container direction="column" alignItems="flex-start" justifyContent="space-evenly"  >
                <TextEntry
                  label="Elevation"
                  testId="elevationId"
                  value={elevation}
                  setValue={setElevation}
                />
                <TextEntry
                  label="Weather"
                  testId="weatherId"
                  value={weather}
                  setValue={setWeather}
                />
              </Grid>
            </Grid>
            <Grid item xs={1}/>
            <Grid item xs={3} >
              <InfoPanel title='FIELD TITLE HERE' description='FIELD DESCRIPTION IN HERE' additional='ADDITIONAL'/>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card variant='outlined'>
        <CardContent>
          <Grid container direction="row" alignItems="center" justifyContent="space-evenly" spacing={2} >
            <Grid item xs={2} >
              <Grid container direction="column" alignItems="center" justifyContent="space-evenly"  >
                <DropDown options={data.Observation.ObservationType} testId='{tt}' value={obType} setValue={setObType} label='Observation Type'  />
                <DropDown options={data.Observation.ImageWeighting} testId='{tt}' value={tapering} setValue={setTapering} label='Tapering'  />
              </Grid>
            </Grid>
            <Grid item xs={2} >
              <Grid container direction="column" alignItems="center" justifyContent="space-evenly"  >
                <DropDown options={data.Observation.ImageWeighting} testId='{tt}' value={weighting} setValue={setWeighting} label='Image Weighting'  />
                <DropDown options={data.Observation.ImageWeighting} testId='{tt}' value={bandwidth} setValue={setBandwidth} label='Bandwidth'  />
            `</Grid>
            </Grid>
            <Grid item xs={2} >
              <Grid container direction="column" alignItems="center" justifyContent="space-evenly"  >
                <DropDown options={data.Observation.ImageWeighting} testId='{tt}' value={sensitivity} setValue={setSensitivity} label='Sensitivity'  />
                <DropDown options={data.Observation.ImageWeighting} testId='{tt}' value={robust} setValue={setRobust} label='Robust Value'  />
              </Grid>
            </Grid>
            <Grid item xs={2} >
              <Grid container direction="column" alignItems="center" justifyContent="space-evenly"  >
                <TextEntry
                  label={sensitivity ? sensitivity.toString() : 'unknown'}
                  testId="frequencyId"
                  value={sensitivity2}
                  setValue={setSensitivity2}
                />
                <TextEntry
                  label="Central Frequency"
                  testId="frequencyId"
                  value={frequency}
                  setValue={setFrequency}
                />
                <DropDown options={data.Observation.ImageWeighting} testId='{tt}' value={averaging} setValue={setAveraging} label='Spectral Averaging'  />
              </Grid>
            </Grid>
            <Grid item xs={1}/>
            <Grid item xs={3} >
              <InfoPanel title='Sensitivity Calculator' description='Sensitivity Calculator description in here' sensCalc={true}/>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}