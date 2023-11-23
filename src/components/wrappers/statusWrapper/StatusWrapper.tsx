'useClient';
import React from 'react';
import { Status } from '@ska-telescope/ska-gui-components';
import { Grid, Typography } from '@mui/material';

interface StatusWrapperProps {
    level?: number;
    title?: string;
    url?: string;
  }

export default function StatusWrapper({level = 5, title ='', url = ''}:StatusWrapperProps) {

  const SIZE = 35;
  const TEXT = ['Y','X','!','?','',''];

  const ClickFunction = () => {
    location.assign(url);
  };

  const getLevel = () => { return level > 5 ? 0 : level; };

  return (
    <Grid container direction="column" alignItems="center" justifyContent="center" onClick={ClickFunction}>
      <Status testId="statusId" level={getLevel()} size={SIZE} text={TEXT[getLevel()]}/>
      {title?.length > 0 && <Typography variant='caption'>{title}</Typography>}
    </Grid>
  );
}
