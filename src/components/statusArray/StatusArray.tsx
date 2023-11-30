import React from 'react';
import { Divider, Grid, Chip } from '@mui/material';
import { DataContext } from '../../components/layout/dataProvider/DataProvider.jsx';
import StatusAvatar from '../../components/wrappers/statusWrapper/StatusAvatar';
import StatusWrapper from '../../components/wrappers/statusWrapper/StatusWrapper';

export default function StatusArray() {
  const { data } = React.useContext(DataContext);

  return (
    <>
      {false && (
        <Divider sx={{ borderBottomWidth: 150, fontWeight: 'bold' }}>
          <Chip avatar={<StatusAvatar level={data.PageStatus.title} />} label="Title" />
          <Chip avatar={<StatusAvatar level={data.PageStatus.team} />} label="Team" />
          <Chip avatar={<StatusAvatar level={data.PageStatus.general} />} label="General" />
          <Chip avatar={<StatusAvatar level={data.PageStatus.science} />} label="Science" />
          <Chip avatar={<StatusAvatar level={data.PageStatus.target} />} label="Target" />
          <Chip avatar={<StatusAvatar level={data.PageStatus.observation} />} label="Observation" />
          <Chip avatar={<StatusAvatar level={data.PageStatus.technical} />} label="Technical" />
          <Chip avatar={<StatusAvatar level={data.PageStatus.data} />} label="Data" />
        </Divider>
      )}

      <Grid
        sx={{ bgcolor: 'transparent' }}
        container
        direction="row"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Grid item></Grid>
        <Grid item>
          <StatusWrapper level={data.PageStatus.title} title="Title" url="/proposal/title" />
        </Grid>
        <Grid item>
          <StatusWrapper level={data.PageStatus.team} title="Team" url="/proposal/team" />
        </Grid>
        <Grid item>
          <StatusWrapper level={data.PageStatus.general} title="General" url="/proposal/general" />
        </Grid>
        <Grid item>
          <StatusWrapper level={data.PageStatus.science} title="Science" url="/proposal/science" />
        </Grid>
        <Grid item>
          <StatusWrapper level={data.PageStatus.target} title="Target" url="/proposal/target" />
        </Grid>
        <Grid item>
          <StatusWrapper
            level={data.PageStatus.observation}
            title="Observation"
            url="/proposal/observation"
          />
        </Grid>
        <Grid item>
          <StatusWrapper
            level={data.PageStatus.technical}
            title="Technical"
            url="/proposal/technical"
          />
        </Grid>
        <Grid item>
          <StatusWrapper level={data.PageStatus.data} title="Data" url="/proposal/data" />
        </Grid>
      </Grid>
    </>
  );
}
