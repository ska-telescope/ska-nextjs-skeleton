'use client';

import React from 'react';
import PageBanner from '@/components/layout/pageBanner/PageBanner';
import PageFooter from '@/components/layout/pageFooter/PageFooter';
import {Box, Checkbox, FormControlLabel, Grid, Tab, Tabs, Typography} from '@mui/material';
import DataGridWrapper from '../../../components/wrappers/dataGridWrapper/dataGridWrapper';
import { DataContext } from '@/components/layout/dataProvider/DataProvider.jsx';
import theme from '../../../theme';
import {TextEntry} from '@ska-telescope/ska-gui-components';
import TeamInviteButton from '../../../components/button/teamInvite/TeamInviteButton';
import InfoPanel from '../../../components/infoPanel/infoPanel';

interface TabPanelProps {
  children?: React.ReactNode;s
  index: number;
  value: number;
}
export default function Team() {
  const { data } = React.useContext(DataContext);
  const DEFAULT_HELP = { title: 'Help Title', description: 'Field sensitive help', additional: ''};
  const [help] = React.useState(DEFAULT_HELP);


  const columns = [
    { field: 'LastName', headerName: 'Last Name', width: 200 },
    { field: 'FirstName', headerName: 'First Name', width: 200 },
    { field: 'misc', headerName: 'Misc', width: 200 },
  ];

  const extendedColumns = structuredClone(columns);

  const ClickFunction = () => {
  };

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid container direction="column" alignItems="space-evenly" justifyContent="space-around" >
      <Grid item>
        <PageBanner title="Team"/>
      </Grid>
      <Grid p={1} container direction="row" alignItems="space-evenly" justifyContent="space-around">
        <Grid item>
          <DataGridWrapper rows={data.Team} extendedColumns={extendedColumns} height={400} rowClick={ClickFunction} />
        </Grid>
        <Grid sx={{ border: '1px solid grey' }} item>
          <Box sx={{ width: '100%' }}>
            <Box>
              <Tabs textColor="secondary"
                indicatorColor="secondary" value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Invite Team Member" {...a11yProps(0)} sx={{ border: '1px solid grey' }}/>
                <Tab label="Import From File" {...a11yProps(1)} sx={{ border: '1px solid grey' }}/>
                <Tab label="Search For Member" {...a11yProps(2)} sx={{ border: '1px solid grey' }}/>
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Grid item>
                <Grid p={1} container direction="row" alignItems="space-evenly" justifyContent="space-around" >
                  <Grid item xs={6} >
                    <TextEntry
                      label="First Name"
                      testId="firstName"
                    />
                    <TextEntry
                      label="Last Name"
                      testId="lastName"
                    />
                    <TextEntry
                      label="Email"
                      testId="email"
                    />
                    <FormControlLabel
                      value="phdThesis"
                      control={
                        <Checkbox
                          defaultChecked
                          sx={{
                            '&.Mui-checked': {
                              color: theme.palette.secondary.main,
                            },
                          }}
                        />}
                      label="PhD Thesis"
                      labelPlacement="end"
                      sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <InfoPanel title={help.title} description={help.description} additional={help.additional}/>
                  </Grid>
                </Grid>

                <Grid item xs={3}>
                  <TeamInviteButton></TeamInviteButton>
                </Grid>
              </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <p>To be implemented at a later date</p>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <p>To be implemented at a later date</p>
            </CustomTabPanel>
          </Box>
        </Grid>
      </Grid>
      <Grid item>
        <PageFooter previousPageLabel='title' previousPageURL='/proposal/title' nextPageLabel='general' nextPageURL='/proposal/general' />
      </Grid>
    </Grid>
  );
}
