'use client';

import React from 'react';
import Latex from 'react-latex-next';
import { DataContext } from '@/components/layout/dataProvider/DataProvider.jsx';
import { Button, ButtonColorTypes, ButtonVariantTypes } from '@ska-telescope/ska-gui-components';
import { Box, Grid, Modal, Paper, Typography } from '@mui/material';
import LatexEntry from '@/components/latexEntry/latexEntry';
import PageBanner from '@/components/layout/pageBanner/PageBanner';
import PageFooter from '@/components/layout/pageFooter/PageFooter';

export default function ScienceJustification() {
  const { data } = React.useContext(DataContext);
  const [latex, setLatex] = React.useState(data.ScienceJust);
  const [isOpen, setIsOpen] = React.useState(false);
  const [pdfUrl, setPdfUrl] = React.useState('')

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

  const updatePreview = () => {
    const tex = [
      latex
    ].join('\n');

    setPdfUrl('https://latexonline.cc/compile?text=' + encodeURIComponent(tex))
  }

  const title = 'Preview PDF';


  return (
    <>
      {latexModal()}
      <Grid container direction="column" alignItems="space-evenly" justifyContent="space-around" >
        <Grid item>
          <PageBanner title="Science Justification" />
        </Grid>
        <Grid item>
          <Grid container direction="row" justifyContent="space-evenly" >
            <Grid item xs={4} sx={{ bgColor: 'yellow' }}>
              <Grid container direction="column" alignItems="center">
                <Grid>
                  <LatexEntry value={latex} setValue={setLatex} setModal={openModal} />
                </Grid>
                <Grid>
                  <Button
                    ariaDescription={title + 'Button'}
                    color={ButtonColorTypes.Secondary}
                    label={title}
                    onClick={updatePreview}
                    testId={title + 'Button'}
                    variant={ButtonVariantTypes.Contained}
                  >Preview PDF</Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4} >
              <Box m={1}>
                <Typography variant='h5'>Latex Preview</Typography>
                <Latex>{latex}</Latex>
              </Box>
            </Grid>
            <Grid item xs={4} >

              <Typography variant='h5'>PDF Preview</Typography>
              <object data={pdfUrl} type="application/pdf" width="100%" height="100%">
                <p>Syntax error or PDF not available </p>
              </object>

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
