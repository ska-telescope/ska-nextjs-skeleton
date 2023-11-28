/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
'use client';

import React from 'react';
import { DataContext } from '@/components/layout/dataProvider/DataProvider.jsx';
import { Avatar, Card, CardHeader, Grid, Tooltip, Typography } from '@mui/material';
import useTheme from '@mui/material/styles/useTheme';
import { TextEntry } from '@ska-telescope/ska-gui-components';

export default function TitleContent() {
  const { data } = React.useContext(DataContext);
  const theme = useTheme();

  const [theTitle, setTheTitle] = React.useState('');
  const [theProposal, setTheProposal] = React.useState(null);
  const [theSubProposal, setTheSubProposal] = React.useState(null);

  function clickProposal(PROPOSAL: any) {
    setTheProposal(PROPOSAL);
  }
  function clickSubProposal(PROPOSAL: any) {
    setTheSubProposal(PROPOSAL);
  }

  const setCardBG = (in1:any, in2: any) => {
    return in1 && in1 === in2 ? theme.palette.secondary.main : theme.palette.primary.main;
  };
  const setCardFG = (in1:any, in2: any) => {
    return in1 && in1 === in2 ? theme.palette.secondary.contrastText : theme.palette.primary.contrastText;
  };

  function ProposalType(PROPOSAL: any) {
    return (
      <Grid item>
        <Card
          style={{ color: setCardFG(theProposal, PROPOSAL), backgroundColor: setCardBG(theProposal, PROPOSAL)}}
          onClick={() => clickProposal(PROPOSAL)}
          variant='outlined'
        >
          <CardHeader
            avatar={
              <Avatar variant="rounded" style={{ color: setCardBG(theProposal, PROPOSAL), backgroundColor: setCardFG(theProposal, PROPOSAL)}}>
                <Typography variant="body2" component="div">
                  {PROPOSAL.code}
                </Typography>
              </Avatar>}
            title={
              <Typography variant="h6" component="div">
                <Tooltip title={PROPOSAL.description} arrow>
                  {PROPOSAL.title}
                </Tooltip>
              </Typography>
            }
          />
          {/*<CardContent>
            <Tooltip title={PROPOSAL.description} arrow>
              <Typography variant="caption" component="div">
                {PROPOSAL.description}
              </Typography>
            </Tooltip>
          </CardContent>*/}
        </Card>
      </Grid>
    );
  }

  function ProposalSubType(PROPOSAL: any) {
    return (
      <Grid item xs={12} sm={6} md={3}>
        <Card
          style={{ color: setCardFG(theSubProposal, PROPOSAL), backgroundColor: setCardBG(theSubProposal, PROPOSAL)}}
          onClick={() => clickSubProposal(PROPOSAL)}
          variant='outlined'
        >
          <CardHeader
            avatar={
              <Avatar variant="rounded" style={{ color: setCardBG(theSubProposal, PROPOSAL), backgroundColor: setCardFG(theSubProposal, PROPOSAL)}}>
                <Typography variant="body2" component="div">
                  {PROPOSAL.code}
                </Typography>
              </Avatar>}
            title={
              <Typography variant="h6" component="div">
                <Tooltip title={PROPOSAL.description} arrow>
                  {PROPOSAL.title}
                </Tooltip>
              </Typography>
            }
          />
          {/*<CardContent>
            <Typography variant="caption" component="div">
              {PROPOSAL.description.split('\n').map((c: string) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <Typography data-testid={c} variant="caption" component="div">
                    {c}
                  </Typography>
                );
              })}
            </Typography>
            </CardContent>*/}
        </Card>
      </Grid>
    );
  }

  return (
    <Grid container direction="column" alignItems="flex-start" justifyContent="space-evenly" >
      <Grid pl={2} container direction="row" justifyContent="space-around" alignItems="center" spacing={2} >
        <Grid item xs={3}>
          <TextEntry
            label="Title"
            testId="titleId"
            value={theTitle}
            setValue={setTheTitle}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body2">
            This title should be used to allow for the identification of this proposal in a list of proposals
          </Typography>
        </Grid>
      </Grid>

      <Grid pl={2} container direction="row" justifyContent="space-around" alignItems="center" >
        <Grid item xs={3}>
          <Typography variant="body2">
            Proposal Type
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body2">
            Below are the available Proposal Types that can be used as a basis for a new proposal.
          </Typography>
          <Typography variant="body2">
            A description of the different types is provided as an aid as to the correct type to be selected to allow the proposal to be completed as required
          </Typography>
          <Typography variant="body2" sx={{ paddingTop: '20px', fontStyle: 'italic' }}>
            It is possible to be able to change this at a later date, however be aware that this may cause information already entered to be lost.
          </Typography>
        </Grid>
      </Grid>
      <Grid p={2} container direction="row" justifyContent="space-evenly" alignItems="baseline" spacing={2}>
        {data.Projects.map((proposalType: any) => ProposalType(proposalType))}
      </Grid>

      {theProposal &&
        <Grid p={2} container direction="row" justifyContent="space-evenly" alignItems="baseline" spacing={2}>
          {theProposal.subProjects.map((proposalType: any) => ProposalSubType(proposalType))}
        </Grid>
      }

    </Grid>
  );
}