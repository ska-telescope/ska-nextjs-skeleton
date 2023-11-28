'use client';

import React from 'react';
import PageBanner from '@/components/layout/pageBanner/PageBanner';
import PageFooter from '@/components/layout/pageFooter/PageFooter';
import { Grid } from '@mui/material';
import DataGridWrapper from '../../../components/wrappers/dataGridWrapper/dataGridWrapper';
import { DataContext } from '@/components/layout/dataProvider/DataProvider.jsx';

export default function Team() {
  const { data } = React.useContext(DataContext);

  const columns = [
    { field: 'LastName', headerName: 'Last Name', width: 200 },
    { field: 'FirstName', headerName: 'First Name', width: 200 },
    { field: 'Affiliation', headerName: 'Affiliation', width: 200 },
    { field: 'misc', headerName: 'Misc', width: 200 },
    { field: 'bin', headerName: 'Discard', width: 200 },
    { field: 'favourite', headerName: 'Favourite', width: 200 },
  ];

  const extendedColumns = structuredClone(columns);

  const ClickFunction = () => {
  };

  return (
    <Grid container direction="column" alignItems="space-evenly" justifyContent="space-around" >
      <Grid item>
        <PageBanner title="Team"/>
      </Grid>
      <Grid p={1} container direction="row" alignItems="flex-left" justifyContent="space-around">
        <Grid item>
          <DataGridWrapper rows={data.Team} extendedColumns={extendedColumns} height={400} rowClick={ClickFunction} />
        </Grid>
        <Grid item>
          Tabbing to go in here.
        </Grid>
      </Grid>
      <Grid item>
        <PageFooter previousPageLabel='title' previousPageURL='/proposal/title' nextPageLabel='general' nextPageURL='/proposal/general' />
      </Grid>
    </Grid>
  );
}
