'use client';

import React from 'react';
import { useState } from 'react';
import PageBanner from '@/components/layout/pageBanner/PageBanner';
import PageFooter from '@/components/layout/pageFooter/PageFooter';
import { Grid, Typography, Card, CardContent, CardActionArea } from '@mui/material';
import styles from '../../../../styles/target.module.css';

export default function Target() {
  const [selectedCards, setSelectedCards] = useState([
    { index: 0, isSelected: false },
    { index: 1, isSelected: false },
    { index: 2, isSelected: false },
  ]);

  const handleClick = (index: number) => {
    const updatedSelectedCards = selectedCards.map((card) => {
      if (card.index === index) {
        return { ...card, isSelected: true };
      } else {
        return { ...card, isSelected: false };
      }
    });
    setSelectedCards(updatedSelectedCards);
  };

  return (
    <Grid container direction="column" alignItems="space-evenly" justifyContent="space-around" >
      <Grid item>
        <PageBanner title="Target" />
      </Grid>
      <Grid item>
        <Typography variant="h6" m={2}>
          DETAILS NEEDED : SARAH
        </Typography>
        <Grid container direction="row" alignItems="space-evenly" justifyContent="center" spacing={4}>
          <Grid item>
            <Grid item>
              <Card sx={{ width: 275, height: 140 }} className={`${styles.card} ${selectedCards[0].isSelected && styles.selected}`}>
                <CardActionArea onClick={() => handleClick(0)} sx={{ minHeight: 140 }}>
                  <CardContent>
                    <Typography variant="h5" color={() => selectedCards[0].isSelected ? 'white' : 'text.secondary'} align="center" gutterBottom>
                      No specific Target
                    </Typography>
                    <Typography variant="subtitle1" color={() => selectedCards[0].isSelected ? 'white' : 'text.secondary'} align="center">
                      We&apos;re just going to look up
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
          <Grid item>
            <Card sx={{ width: 275, height: 140 }} className={`${styles.card} ${selectedCards[1].isSelected && styles.selected}`}>
              <CardActionArea onClick={() => handleClick(1)} sx={{ minHeight: 140 }}>
                <CardContent>
                  <Typography variant="h5" color={() => selectedCards[1].isSelected ? 'white' : 'text.secondary'} align="center" gutterBottom>
                    List of Targets
                  </Typography>
                  <Typography variant="subtitle1" color={() => selectedCards[1].isSelected ? 'white' : 'text.secondary'} align="center">
                    A list of target will be entered and/or imported from file
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Grid item>
              <Card sx={{ width: 275, height: 140 }} className={`${styles.card} ${selectedCards[2].isSelected && styles.selected}`}>
                <CardActionArea onClick={() => handleClick(2)} sx={{ minHeight: 140 }}>
                  <CardContent>
                    <Typography variant="h5" color={() => selectedCards[2].isSelected ? 'white' : 'text.secondary'} align="center" gutterBottom>
                      Target Mosaic
                    </Typography>
                    <Typography variant="subtitle1" color={() => selectedCards[2].isSelected ? 'white' : 'text.secondary'} align="center">
                      Using a tool to create a mosaic of targets
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid className={`${styles.contentContainer}`} container direction="column" justifyContent="flex-end" alignItems="center">
          <Grid item>
            {selectedCards[0].isSelected && <h3>Content 1</h3>}
          </Grid>
          <Grid item>
            {selectedCards[1].isSelected && <h3>Content 2</h3>}
          </Grid>
          <Grid item>
            {selectedCards[2].isSelected && <h3>Content 3</h3>}
          </Grid>
        </Grid>
        <Grid item>
          <PageFooter previousPageLabel='science' previousPageURL='/proposal/science' nextPageLabel='observation' nextPageURL='/proposal/observation' />
        </Grid>
      </Grid>
    </Grid >
  );
}
