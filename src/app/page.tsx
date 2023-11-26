'use client';

import React from 'react';
import { DataContext } from '@/components/layout/dataProvider/DataProvider.jsx';
import AddProposalButton from '@/components/button/addProposal/AddProposalButton';
import DataGridWrapper from '@/components/wrappers/dataGridWrapper/dataGridWrapper';
import { Grid, Typography, Container } from '@mui/material';
import styles from '../../styles/addproposal.module.css';
import '../../styles/globals.css'
import { DropDown } from '@ska-telescope/ska-gui-components';
import {SearchComponent} from '../components/search/searchComponent'
import {DropdownComponent} from '../components/dropDown/dropdownComponent'
export default function Home() {
  const { data } = React.useContext(DataContext);

  const ClickFunction = () => {
    location.assign('/proposal/title');
  };

  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  const handleSelection = (selectedValue: string | number) => {
    // No console.log here; you can perform any other actions with the selected value
    // For example:
    alert(`Selected value in ParentComponent: ${selectedValue}`);
  };
 
  const columns = [
    { field: 'id', headerName: 'SKAO ID', width: 200 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'pi', headerName: 'PI', width: 200 },
    { field: 'status', headerName: 'Status', width: 200 },
    { field: 'lastUpdated', headerName: 'Last Updated', width: 200 },
    { field: 'Actions', headerName: 'Actions', width: 200 }
  ];
  const extendedColumns = structuredClone(columns);
 

  const handleSearch = (term: string) => {
    console.log('Search term:', term);
    // Implement your search logic here
  };
  return (
    // <div className={styles.container}>
      <Container disableGutters={true} maxWidth="xl"> 
      <Grid p={1} container direction="column" alignItems="center" justifyContent="space-around">
        <Typography variant="h5">
          Proposals where you have either participated as a Co-Investigator or as a Principal Investigator.
        </Typography>
      </Grid>
      
      <div className={styles.container}>
        <AddProposalButton />
        <div className={styles.dropdown}>
        <DropDown options={options} testId='{tt}' value={30} label='All Status Types'  />      
        </div>  
        {/* <DropdownComponent options={options} onSelect={handleSelection} label="Choose an option" /> */}
        <SearchComponent onSearch={handleSearch} />
      </div>

    
      <Grid p={1} container direction="column" alignItems="flex-left" justifyContent="space-around">
        <DataGridWrapper rows={data.ExistingProposal} extendedColumns={extendedColumns} height={500} rowClick={ClickFunction} />
      </Grid>
    </Container>
  );
}
