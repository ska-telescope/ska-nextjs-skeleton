'use client';

import React from 'react';
import { DataContext } from '../../../components/layout/dataProvider/DataProvider.jsx';
import PageBanner from '../../../components/layout/pageBanner/PageBanner';
import PageFooter from '../../../components/layout/pageFooter/PageFooter';
import InfoPanel from '../../../components/infoPanel/infoPanel';
import { DropDown, TextEntry } from '@ska-telescope/ska-gui-components';

import { Grid, Typography } from '@mui/material';

export default function General() {
  const { data } = React.useContext(DataContext);
  const DEFAULT_HELP = { title: 'Help Title', description: 'Field sensitive help', additional: '' };

  const [abstract, setAbstract] = React.useState(data.General.Abstract);
  const [category, setCategory] = React.useState(1);
  const [subCategory, setSubCategory] = React.useState(1);
  const [help] = React.useState(DEFAULT_HELP);

  return (
    <Grid container direction="column" alignItems="space-evenly" justifyContent="space-around">
      <Grid item>
        <PageBanner title="General" />
      </Grid>
      <Grid item>
        <Grid container direction="row" alignItems="center" justifyContent="center">
          <Typography variant="body1" m={2}>
            Cycle
          </Typography>
          <Typography variant="h6" m={2}>
            <strong>{data.General.Cycle}</strong>
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="row" alignItems="center" justifyContent="space-evenly">
          <Grid item xs={4}>
            <TextEntry
              label="Abstract"
              testId="abstractId"
              rows={10}
              value={abstract}
              setValue={setAbstract}
            />
          </Grid>
          <Grid item xs={3}>
            <DropDown
              options={data.General.ScienceCategory}
              testId="{tt}"
              value={category}
              setValue={setCategory}
              label="Scientific Category"
            />
            <DropDown
              options={data.General.ScienceSubCategory}
              testId="{tt}"
              value={subCategory}
              setValue={setSubCategory}
              label="Scientific sub-category"
            />
          </Grid>
          <Grid item xs={3}>
            <InfoPanel
              title={help.title}
              description={help.description}
              additional={help.additional}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <PageFooter
          previousPageLabel="team"
          previousPageURL="/proposal/team"
          nextPageLabel="science"
          nextPageURL="/proposal/science"
        />
      </Grid>
    </Grid>
  );
}
