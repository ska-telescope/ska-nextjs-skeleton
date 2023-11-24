'use client';

import React from 'react';
import { DataContext } from '@/components/layout/dataProvider/DataProvider.jsx';
import PageBanner from '@/components/layout/pageBanner/PageBanner';
import PageFooter from '@/components/layout/pageFooter/PageFooter';
import LatexEntry from '@/components/latexEntry/latexEntry';
import { Box, Grid } from '@mui/material';
import Latex from 'react-latex-next';

export default function Title() {
  const { data } = React.useContext(DataContext);

  return (
    <Grid container direction="column" alignItems="space-evenly" justifyContent="space-around" >
      <Grid item>
        <PageBanner title="Title"/>
      </Grid>
      <Grid item>
        <Grid container direction="row" alignItems="center" justifyContent="space-evenly" >
          <Grid item>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <PageFooter nextPageLabel='team' nextPageURL='/proposal/team' />
      </Grid>
    </Grid>
  );
}
