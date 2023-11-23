'useClient';

import { Grid } from '@mui/material';
import { Button, ButtonColorTypes, ButtonVariantTypes } from '@ska-telescope/ska-gui-components';

export default function ButtonUp() {
  const ClickFunction = () => {
    location.assign('/');
  };

  return (
    <>
      <Grid container direction="row" alignItems="center" justifyContent="space-around">
        <Button
          ariaDescription="Button up into next page"
          color={ButtonColorTypes.Secondary}
          label="RETURN TO HOME"
          onClick={ClickFunction}
          testId="homeButton"
          variant={ButtonVariantTypes.Contained}
        />
      </Grid>
    </>
  );
}
