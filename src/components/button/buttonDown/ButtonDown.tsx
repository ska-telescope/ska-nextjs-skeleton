'useClient';

import { Grid } from '@mui/material';
import { Button, ButtonColorTypes, ButtonVariantTypes } from '@ska-telescope/ska-gui-components';

export default function ButtonDown() {
  const ClickFunction = () => {
    location.assign('/continue');
  };

  return (
    <>
      <Grid container direction="row" alignItems="center" justifyContent="space-around">
        <Button
          ariaDescription="Button down into next page"
          color={ButtonColorTypes.Inherit}
          label="CONTINUE"
          onClick={ClickFunction}
          testId="continueButton"
          variant={ButtonVariantTypes.Contained}
        />
      </Grid>
    </>
  );
}
