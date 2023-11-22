'use client';

import React from 'react';
import { Box, Grid } from '@mui/material';
import { TextEntry } from '@ska-telescope/ska-gui-components';

import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';


export default function LatexForm() {
  const DEFAULT_LATEX = 'We give illustrations for the three processes $e^+e^-$, gluon-gluon and $\\gamma\\gamma \\to W t\\bar b$.';
  const BOX_WIDTH = '15%';
  const [latex, setLatex] = React.useState(DEFAULT_LATEX);


  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="space-around"
    >
      <Box m={1} sx={{ width: BOX_WIDTH }}>
        <TextEntry
          label="Latex Input"
          testId="latexId"
          rows={20}
          value={latex}
          setValue={setLatex}
        />
      </Box>
      <Box m={1} sx={{ width: BOX_WIDTH }}>
        <Latex>{latex}</Latex>
      </Box>
    </Grid>
  );
}