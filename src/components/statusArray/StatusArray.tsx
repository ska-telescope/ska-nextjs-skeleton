import React from 'react';
import { Grid } from '@mui/material';
import { DataContext } from '@/components/dataProvider/DataProvider.jsx';
import StatusWrapper from '@/components/wrappers/statusWrapper/StatusWrapper';

export default function StatusArray() {
  const { data } = React.useContext(DataContext);

  return (
    <Grid container direction="row" alignItems="center" justifyContent="space-evenly" >
      <Grid item>
      </Grid>
      <Grid item>
        <StatusWrapper level={data.PageStatus.title} title="Title" url='/proposal/title'/>
      </Grid>
      <Grid item>
        <StatusWrapper level={data.PageStatus.team} title="Team" url='/proposal/team'/>
      </Grid>
      <Grid item>
        <StatusWrapper level={data.PageStatus.general} title="General" url='/proposal/general'/>
      </Grid>
      <Grid item>
        <StatusWrapper level={data.PageStatus.science} title="Science" url='/proposal/science'/>
      </Grid>
      <Grid item>
        <StatusWrapper level={data.PageStatus.target} title="Target" url='/proposal/target'/>
      </Grid>
      <Grid item>
        <StatusWrapper level={data.PageStatus.observation} title="Observation" url='/proposal/observation'/>
      </Grid>
      <Grid item>
        <StatusWrapper level={data.PageStatus.technical} title="Technical" url='/proposal/technical'/>
      </Grid>
      <Grid item>
        <StatusWrapper level={data.PageStatus.data} title="Data" url='/proposal/data'/>
      </Grid>
    </Grid>
  );
}
