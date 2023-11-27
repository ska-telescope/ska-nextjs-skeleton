'use client';

import React from 'react';
import PageBanner from '@/components/layout/pageBanner/PageBanner';
import PageFooter from '@/components/layout/pageFooter/PageFooter';
import { Grid, Typography } from '@mui/material';
import { TextEntry } from '@ska-telescope/ska-gui-components';
// import styles from '@/styles/datapage.module.css'
import styles from './datapage.module.css';
export default function Data() {
  const [theTitle, setTheTitle] = React.useState('');
  return (
    <Grid container direction="column" alignItems="space-evenly" justifyContent="space-around" >
      <Grid item>
        <PageBanner title="Data"/>
      </Grid>
      <div className={styles.container}>
        <Typography variant="h6" m={2}>
          <div className={styles.level1}>
          SDP
            <Grid item xs={3}>
              <TextEntry
                label="Pipeline"
                testId="titleId"
                value={theTitle}
                setValue={setTheTitle}
              />
            </Grid>
          </div>
          <div className={styles.level1}>
          SRC NET
          </div>
        </Typography>
      </div>
      <Grid item>
        <PageFooter previousPageLabel='technical' previousPageURL='/proposal/technical' />
      </Grid>
    </Grid>
  );
}

