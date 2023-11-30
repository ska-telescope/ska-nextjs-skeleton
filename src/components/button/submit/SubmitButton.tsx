'useClient';

import React from 'react';
import { Button, ButtonColorTypes, ButtonVariantTypes } from '@ska-telescope/ska-gui-components';
import PublishIcon from '@mui/icons-material/Publish';

export default function SaveButton() {
  const ClickFunction = () => {};

  const title = 'Submit';

  return (
    <Button
      ariaDescription={title + 'Button'}
      color={ButtonColorTypes.Secondary}
      disabled={true}
      icon={<PublishIcon />}
      label={title}
      onClick={ClickFunction}
      testId={title + 'Button'}
      variant={ButtonVariantTypes.Contained}
    />
  );
}
