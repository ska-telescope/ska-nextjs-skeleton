'use client';

import React from 'react';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { DataContext } from '../../../components/layout/dataProvider/DataProvider.jsx';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Modal,
  Typography,
} from '@mui/material';
// import PreviewPdfButton from '@/components/button/previewPdf/PreviewPdfButton';
import UploadPdfButton from '../../../components/button/uploadPdf/UploadPdfButton';
import LatexEntry from '../../../components/latexEntry/latexEntry';
import PageBanner from '../../../components/layout/pageBanner/PageBanner';
import PageFooter from '../../../components/layout/pageFooter/PageFooter';
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
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
          <Card variant="outlined" sx={{ height: '90vh', width: '90vw' }}>
            <CardHeader
              action={
                <IconButton
                  aria-label="DUMMY"
                  sx={{ '&:hover': { backgroundColor: 'primary.dark' }, ml: 1 }}
                  onClick={() => closeModal()}
                  color="inherit"
                >
                  <HighlightOffIcon />
                </IconButton>
              }
              title={<Typography variant="h6">PDF Preview</Typography>}
            />
            <CardContent sx={{ height: '90vh', width: '90vw' }}>
              <object data={pdfUrl} type="application/pdf" width="100%" height="100%">
                <p>Syntax error or PDF not available </p>
              </object>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    );
  };

  const updatePreview = (isOpenModal: boolean) => {
    const tex = [latex].join('\n');

    setPdfUrl('https://latexonline.cc/compile?text=' + encodeURIComponent(tex));
    if (isOpenModal) openModal();
  };

  const setTheLatex = (e: string) => {
    setLatex(e);
    updatePreview(false);
  };

  return (
    <>
      {latexModal()}
      <Grid container direction="column" alignItems="space-evenly" justifyContent="space-around">
        <Grid item>
          <PageBanner title="Science Justification" />
        </Grid>
        <Grid item>
          <Grid container p={5} spacing={5} direction="row" justifyContent="space-evenly">
            <Grid item xs={6}>
              <Grid container direction="column" alignItems="left">
                <Typography variant="h5">LaTeX Input</Typography>
                <LatexEntry
                  value={latex}
                  setValue={(e: string) => {
                    setTheLatex(e);
                  }}
                  setModal={openModal}
                />
                <Grid container direction="row" justifyContent="space-between">
                  {/*<PreviewPdfButton onClick={()=>updatePreview(true)} />*/}
                  <UploadPdfButton />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Box m={1}>
                <Typography variant="h5">LaTeX Preview</Typography>
                <Latex>{latex}</Latex>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <PageFooter
            previousPageLabel="general"
            previousPageURL="/proposal/general"
            nextPageLabel="target"
            nextPageURL="/proposal/target"
          />
        </Grid>
      </Grid>
    </>
  );
}
