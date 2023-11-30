'use client';

import React from 'react';
import { useState } from 'react';
import PageBanner from '@/components/layout/pageBanner/PageBanner';
import PageFooter from '@/components/layout/pageFooter/PageFooter';
import { Grid, Typography, Card, CardContent, CardActionArea } from '@mui/material';
import useTheme from '@mui/material/styles/useTheme';
import TargetListSection from './targetListSection';
import TargetNoSpecificSection from './targetNoSpecificSection';
import TargetMosaicSection from './targetMosaicSection';

export default function Target() {
  const theme = useTheme();

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

  const setCardBG = (isSelected: boolean) => {
    return isSelected ? theme.palette.secondary.main : theme.palette.primary.main;
  };
  const setCardFG = (isSelected: boolean) => {
    return isSelected ? theme.palette.secondary.contrastText : theme.palette.primary.contrastText;
  };

  return (
    <Grid container direction="column" justifyContent="space-around">
      <Grid item>
        <PageBanner title="Target" />
      </Grid>
      <Grid container direction="row" alignItems="space-evenly" justifyContent="center" spacing={4}>
        <Grid item>
          <Grid item>
            <Card
              sx={{ width: 275, height: 140 }}
              style={{
                color: setCardFG(selectedCards[0].isSelected),
                backgroundColor: setCardBG(selectedCards[0].isSelected),
              }}
            >
              <CardActionArea onClick={() => handleClick(0)} sx={{ minHeight: 140 }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    color={() => (selectedCards[0].isSelected ? 'white' : 'text.secondary')}
                    align="center"
                    gutterBottom
                  >
                    No specific Target
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color={() => (selectedCards[0].isSelected ? 'white' : 'text.secondary')}
                    align="center"
                  >
                    We&apos;re just going to look up
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Grid item>
          <Card
            sx={{ width: 275, height: 140 }}
            style={{
              color: setCardFG(selectedCards[1].isSelected),
              backgroundColor: setCardBG(selectedCards[1].isSelected),
            }}
          >
            <CardActionArea onClick={() => handleClick(1)} sx={{ minHeight: 140 }}>
              <CardContent>
                <Typography
                  variant="h5"
                  color={() => (selectedCards[1].isSelected ? 'white' : 'text.secondary')}
                  align="center"
                  gutterBottom
                >
                  List of Targets
                </Typography>
                <Typography
                  variant="subtitle1"
                  color={() => (selectedCards[1].isSelected ? 'white' : 'text.secondary')}
                  align="center"
                >
                  A list of target will be entered and/or imported from file
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Grid item>
            <Card
              sx={{ width: 275, height: 140 }}
              style={{
                color: setCardFG(selectedCards[2].isSelected),
                backgroundColor: setCardBG(selectedCards[2].isSelected),
              }}
            >
              <CardActionArea onClick={() => handleClick(2)} sx={{ minHeight: 140 }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    color={() => (selectedCards[2].isSelected ? 'white' : 'text.secondary')}
                    align="center"
                    gutterBottom
                  >
                    Target Mosaic
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color={() => (selectedCards[2].isSelected ? 'white' : 'text.secondary')}
                    align="center"
                  >
                    Using a tool to create a mosaic of targets
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Grid>

      <Grid mt={4} container direction="column" justifyContent="space-between" alignItems="center">
        <Grid item>{selectedCards[0].isSelected && <TargetNoSpecificSection />}</Grid>
        <Grid item sx={{ width: '100%' }}>
          {selectedCards[1].isSelected && <TargetListSection />}
        </Grid>
        <Grid item>{selectedCards[2].isSelected && <TargetMosaicSection />}</Grid>
      </Grid>
      <Grid item>
        <PageFooter
          previousPageLabel="science"
          previousPageURL="/proposal/science"
          nextPageLabel="observation"
          nextPageURL="/proposal/observation"
        />
      </Grid>
    </Grid>
  );
}
