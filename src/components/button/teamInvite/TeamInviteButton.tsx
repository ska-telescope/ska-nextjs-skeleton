'useClient';

import React from 'react';
import { Button, ButtonColorTypes, ButtonVariantTypes } from '@ska-telescope/ska-gui-components';
import FactCheckIcon from '@mui/icons-material/FactCheck';

export default function TeamInviteButton() {
  const ClickFunction = () => {
  };

  const title = 'Send Invitation';

  return (
    <Button
      ariaDescription={title + 'Button'}
      color={ButtonColorTypes.Secondary}
      label={title}
      onClick={ClickFunction}
      testId={title + 'Button'}
      variant={ButtonVariantTypes.Contained}
    />
  );
}
