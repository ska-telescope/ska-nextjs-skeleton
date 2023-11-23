'use client';

import React from 'react';
import Latex from 'react-latex-next';
import { DataContext } from '@/components/dataProvider/DataProvider.jsx';
import { Box, Grid, Modal, Paper } from '@mui/material';
import LatexEntry from '@/components/latexEntry/latexEntry';
import PageBanner from '@/components/pageBanner/PageBanner';
import PageFooter from '@/components/pageFooter/PageFooter';

export default function ScienceJustification() {
  const { proposalData } = React.useContext(DataContext);
  const [latex, setLatex] = React.useState(proposalData.science);
  const [isOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const latexModal = () => {
    return (
      <Modal open={isOpen}>
        <Box>
          <Paper>
            <button onClick={closeModal}>Close</button>
            <p>
                IRCbot BOT 10:47 AM [irc] From KAROO_MKAT Alarm: new warn alarm -
                Elasticsearch_health_status (cammon_logmon_status_health is
                yellow)
            </p>
            <p>
                10:49 AM [irc] From KAROO_MKAT Alarm: new warn alarm -
                Elasticsearch_health_status (cammon_logmon_status_health is
                yellow)
            </p>
            <p>
                10:52 AM [irc] From KAROO_MKAT Alarm: new warn alarm -
                Elasticsearch_health_status (cammon_logmon_status_health is
                yellow)
            </p>
            <p>
                10:54 AM [irc] From KAROO_MKAT Alarm: new warn alarm -
                Elasticsearch_health_status (cammon_logmon_status_health is
                yellow)
            </p>
            <p>
                10:58 AM [irc] From KAROO_MKAT Alarm: new warn alarm -
                Elasticsearch_health_status (cammon_logmon_status_health is
                yellow)
            </p>
            <p>
                11:00 AM [irc] From KAROO_MKAT Alarm: new warn alarm -
                Elasticsearch_health_status (cammon_logmon_status_health is
                yellow)
            </p>
            <p>
                IRCbot BOT 11:13 AM [irc] From KAROO_MKAT Alarm: new warn alarm -
                Elasticsearch_health_status (cammon_logmon_status_health is
                yellow)
            </p>
          </Paper>
        </Box>
      </Modal>
    );
  };

  return (
    <>
      {latexModal()}
      <Grid container direction="column" alignItems="space-evenly" justifyContent="space-around" >
        <Grid item>
          <PageBanner title="Science Justification"/>
        </Grid>
        <Grid item>
          <Grid container direction="row" alignItems="center" justifyContent="space-evenly" >
            <Grid item sx={{ bgColor: 'yellow' }}>
              <LatexEntry value={latex} setValue={setLatex} setModal={openModal}/>
            </Grid>
            <Grid item>
              <Box m={1}>
                <Latex>{latex}</Latex>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <PageFooter previousPageLabel='general' previousPageURL='/proposal/general' nextPageLabel='target' nextPageURL='/proposal/target' />
        </Grid>
      </Grid>
    </>
  );
}
