'use client';

import React from 'react';
import { DataContext } from '@/components/dataProvider/DataProvider.jsx';
import AddProposalButton from '@/components/button/addProposal/AddProposalButton';
import DataGridWrapper from '@/components/wrappers/dataGridWrapper/dataGridWrapper';
import { Grid, Typography } from '@mui/material';

export default function Home() {
  const { data } = React.useContext(DataContext);

  const ClickFunction = () => {
    location.assign('/proposal/title');
  };

  const columns = [
    { field: 'id', headerName: 'SKAO ID', width: 200 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'pi', headerName: 'PI', width: 200 },
    { field: 'status', headerName: 'Status', width: 200 },
    { field: 'lastUpdated', headerName: 'Last Updated', width: 200 }
  ];
  const extendedColumns = structuredClone(columns);

  return (
    <>
      <Grid p={1} container direction="column" alignItems="center" justifyContent="space-around">
        <Typography variant="h5">
          In this space should be some sort of description as to the purpose of this page, including guidance, how to progress, etc
        </Typography>
      </Grid>

      <Grid p={2} container direction="column" alignItems="flex-start" justifyContent="space-around">
        <AddProposalButton />
      </Grid>

      <Grid p={1} container direction="column" alignItems="center" justifyContent="space-around">
        <DataGridWrapper rows={data.ExistingProposal} extendedColumns={extendedColumns} height={400} rowClick={ClickFunction} />
      </Grid>
    </>
  );
}
