'use client';

import React from 'react';
import Latex from 'react-latex-next';
import { DataContext } from '@/components/layout/dataProvider/DataProvider.jsx';
import { Button, ButtonColorTypes, ButtonVariantTypes } from '@ska-telescope/ska-gui-components';
import { Box, Card, CardContent, CardHeader, Grid, IconButton, Modal, Typography } from '@mui/material';
import LatexEntry from '@/components/latexEntry/latexEntry';
import PageBanner from '@/components/layout/pageBanner/PageBanner';
import PageFooter from '@/components/layout/pageFooter/PageFooter';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function ScienceJustification() {
  const { data } = React.useContext(DataContext);
  const [latex, setLatex] = React.useState(data.ScienceJust);
  const [isOpen, setIsOpen] = React.useState(false);
  const [pdfUrl, setPdfUrl] = React.useState('');

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const latexModal = () => {
    return (
      <Modal open={isOpen}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <Card variant='outlined' sx={{  height:'90vh',  width:'90vw' }}>
            <CardHeader
              action={
                <IconButton
                  aria-label="DUMMY"
                  sx={{ '&:hover': { backgroundColor: 'primary.dark' }, ml: 1 }}
                  onClick={() => closeModal()}
                  color="inherit"
                >
                  <HighlightOffIcon/>
                </IconButton>}
              title={<Typography variant='h6'>TITLE</Typography>} />
            <CardContent>
              <object data={pdfUrl} type="application/pdf" width="100%" height="100%">
                <p>Syntax error or PDF not available </p>
              </object>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    );
  };

  const updatePreview = () => {
    const tex = [
      latex
    ].join('\n');

    setPdfUrl('https://latexonline.cc/compile?text=' + encodeURIComponent(tex));
  };

  React.useEffect(() => {
    updatePreview();
  }, [data.ScienceJust]);

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
