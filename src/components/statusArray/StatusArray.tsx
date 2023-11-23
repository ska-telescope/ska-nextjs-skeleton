import React from 'react';
import { Grid } from '@mui/material';
import StatusWrapper from '@/components/wrappers/statusWrapper/StatusWrapper';

export default function StatusArray() {

  return (
    <Grid container direction="row" alignItems="center" justifyContent="space-evenly" >
      <Grid item>
      </Grid>
      <Grid item>
        <StatusWrapper title="Title" url='/proposal/title'/>
      </Grid>
      <Grid item>
        <StatusWrapper level={0} title="Team" url='/proposal/team'/>
      </Grid>
      <Grid item>
        <StatusWrapper level={1} title="General" url='/proposal/general'/>
      </Grid>
      <Grid item>
        <StatusWrapper level={2} title="Science" url='/proposal/science'/>
      </Grid>
      <Grid item>
        <StatusWrapper level={3} title="Target" url='/proposal/target'/>
      </Grid>
      <Grid item>
        <StatusWrapper level={4} title="Observation" url='/proposal/observation'/>
      </Grid>
      <Grid item>
        <StatusWrapper level={5} title="Technical" url='/proposal/technical'/>
      </Grid>
      <Grid item>
        <StatusWrapper level={6} title="Data" url='/proposal/data'/>
      </Grid>
    </Grid>
  );
}
