import { Grid, Typography } from "@mui/material";
import { Alert } from "@ska-telescope/ska-gui-components";

export default function WelcomeBanner() {
  const SEVERITY = 5;

  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-around"
      >
        <Typography data-testid="titleId" variant="h5">
          Welcome
        </Typography>
      </Grid>

      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-around"
      >
        <Grid item xs={6}>
          <Alert
            ariaDescription="Sample description for screen readers"
            ariaTitle="Sample title for screen readers"
            severity={SEVERITY}
            testId="alertTestId"
          >
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="space-around"
            >
              <Grid item xs={2} />
              <Grid item xs={8}>
                <Typography data-testid="text1Id">
                  This is a simple implementation of a NextJS Application
                </Typography>
              </Grid>
              <Grid item xs={2} />

              <Grid item xs={2} />
              <Grid item xs={8}>
                <Typography data-testid="text2Id">
                  It is hoped that this is used as a basis for new applications
                  for the SKAO
                </Typography>
              </Grid>
              <Grid item xs={2} />

              <Grid item xs={2} />
              <Grid item xs={8}>
                <Typography data-testid="text3Id" m={2}>
                  A few basic components have been added as examples, as well as
                  the MUI grid which can be used for component layout
                </Typography>
              </Grid>
              <Grid item xs={2} />

              <Grid item xs={3} />
              <Grid item xs={6}>
                <Typography data-testid="text4Id" m={2}>
                  For information on the available gui-components, see the
                  documentation available at this link
                </Typography>
              </Grid>
              <Grid item xs={3} />

              <Grid item>
                <Typography data-testid="text5Id" m={2} variant="body2">
                  https://developer.skao.int/projects/ska-gui-components/en/latest/?badge=latest
                </Typography>
              </Grid>
            </Grid>
          </Alert>
        </Grid>
      </Grid>
    </>
  );
}
