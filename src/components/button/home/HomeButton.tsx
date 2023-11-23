'useClient';

import React from 'react';
import { Button, ButtonColorTypes, ButtonVariantTypes } from '@ska-telescope/ska-gui-components';
import HomeIcon from '@mui/icons-material/Home';

export default function HomeButton() {
  const ClickFunction = () => {
    location.assign('/');
  };

  const title = 'Home';

  return (
    <Button
      ariaDescription={title + 'Button'}
      color={ButtonColorTypes.Inherit}
      icon={<HomeIcon/>}
      label={title}
      onClick={ClickFunction}
      testId={title + 'Button'}
      variant={ButtonVariantTypes.Contained}
    />
  );
}
