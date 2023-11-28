'use client';
import React from 'react';
import { DataContext } from '@/components/layout/dataProvider/DataProvider.jsx';
import { Box, Grid, Modal, Paper, Typography, Card, CardHeader, IconButton, CardContent } from '@mui/material';
import LatexEntry from '@/components/latexEntry/latexEntry';
import PreviewPdfButton from '@/components/button/previewPdf/PreviewPdfButton'
import UploadPdfButton from '@/components/button/uploadPdf/UploadPdfButton'
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
              title={<Typography variant='h6'>PDF Preview</Typography>} />
            <CardContent sx={{  height:'90vh',  width:'90vw' }}>
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

  return (
    <>
      {latexModal()}
      <Grid container direction="column" alignItems="space-evenly" justifyContent="space-evenly" >
        <Grid item>
          <PageBanner title="Science Justification" />
        </Grid>
        <Grid item>
          <Grid container p={5} spacing={5} direction="row" justifyContent="space-evenly" >
            <Grid item xs={6}>
              <Grid container direction="column" alignItems="left">
                <Typography variant='h5'>LaTeX Input</Typography>
                <LatexEntry value={latex} setValue={setLatex} setModal={openModal} />
                <Grid container direction="row" justifyContent="space-between">
                  <PreviewPdfButton
                    onClick={updatePreview} />
                  <UploadPdfButton />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
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
