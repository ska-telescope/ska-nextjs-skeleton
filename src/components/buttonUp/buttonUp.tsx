'useClient';

import { Grid } from '@mui/material';
import { useRouter } from 'next/navigation';
import {
  Button,
  ButtonColorTypes,
  ButtonVariantTypes,
} from '@ska-telescope/ska-gui-components';

export default function ButtonUp() {
  const router = useRouter();

  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-around"
      >
        <Button
          ariaDescription="Button up into next page"
          color={ButtonColorTypes.Secondary}
          label="RETURN TO HOME"
          onClick={() => router.push('/')}
          testId="continueButton"
          variant={ButtonVariantTypes.Contained}
        />
      </Grid>
    </>
  );
}
