'useClient';

import { Grid } from '@mui/material';
import { useRouter } from 'next/navigation';
import {
  Button,
  ButtonColorTypes,
  ButtonVariantTypes,
} from '@ska-telescope/ska-gui-components';

export default function ButtonDown() {

  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-around"
      >
        <Button
          ariaDescription="Button down into next page"
          color={ButtonColorTypes.Inherit}
          label="CONTINUE"
          onClick={() => useRouter().push('/continue')}
          testId="continueButton"
          variant={ButtonVariantTypes.Contained}
        />
      </Grid>
    </>
  );
}
