'use client';
import React from 'react';
import Latex from 'react-latex-next';
import { DataContext } from '@/components/layout/dataProvider/DataProvider.jsx';
import { Button, ButtonColorTypes, ButtonVariantTypes } from '@ska-telescope/ska-gui-components';
import { Box, Grid, Typography } from '@mui/material';
import LatexEntry from '@/components/latexEntry/latexEntry';
import PageBanner from '@/components/layout/pageBanner/PageBanner';
import PageFooter from '@/components/layout/pageFooter/PageFooter';

export default function Title() {

  const { data } = React.useContext(DataContext);
  const [latex, setLatex] = React.useState(data.TechnicalJust);
  const [pdfUrl, setPdfUrl] = React.useState('');

  const updatePreview = () => {
    const tex = [
      latex
    ].join('\n');

    setPdfUrl('https://latexonline.cc/compile?text=' + encodeURIComponent(tex));
  };

  React.useEffect(() => {
    updatePreview();
  }, [data.TechnicalJust]);

  const title = 'Preview PDF';

  return (
    <Grid container direction="column" alignItems="space-evenly" justifyContent="space-around" >
      <Grid item>
        <PageBanner title="Technical" />
      </Grid>
      <Grid item>
        <Grid container direction="row" justifyContent="space-evenly" >
          <Grid item xs={4} sx={{ bgColor: 'yellow' }}>
            <Grid container direction="column" alignItems="center">
              <Grid>
                <LatexEntry value={latex} setValue={setLatex} setModal={false} />
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
        <PageFooter previousPageLabel='observation' previousPageURL='/proposal/observation' nextPageLabel='data' nextPageURL='/proposal/data' />
      </Grid>
    </Grid>
  );
}
