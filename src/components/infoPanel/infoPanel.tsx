/* eslint-disable @typescript-eslint/ban-types */
'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CalculateIcon from '@mui/icons-material/Calculate';

styled(() => {
  return <IconButton />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface InfoPanelProps {
  title: string;
  description: string;
  additional?: string;
  sensCalc?: Boolean;
  maxWidth?: number;
}

export default function InfoPanel({
  title,
  description,
  additional = '',
  sensCalc = false,
  maxWidth = 400,
}: InfoPanelProps) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleCalcClick = () => {
    location.assign('/proposal/sensCalc');
  };

  const getIcon = () => {
    return additional ? (
      <MoreVertIcon onClick={handleExpandClick} />
    ) : sensCalc ? (
      <CalculateIcon onClick={handleCalcClick} />
    ) : null;
  };

  return (
    <Card variant="outlined" sx={{ maxWidth: maxWidth }}>
      <CardHeader
        title={<Typography variant="body2">{title}</Typography>}
        action={getIcon() !== null && <IconButton aria-label="settings">{getIcon()}</IconButton>}
      />
      <CardContent>
        <Typography variant="caption">{description}</Typography>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="caption">{additional}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
