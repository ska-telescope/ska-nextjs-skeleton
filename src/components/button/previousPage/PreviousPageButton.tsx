'useClient';

import React from 'react';
import { Button, ButtonColorTypes, ButtonVariantTypes } from '@ska-telescope/ska-gui-components';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

interface PreviousPageProps {
  label?: string;
  url?: string;
}

export default function PreviousPageButton({ label = '', url = '' }: PreviousPageProps) {
  const ClickFunction = () => {
    location.assign(url);
  };

  return (
    <Button
      ariaDescription={label + 'Button'}
      color={ButtonColorTypes.Inherit}
      icon={<ArrowBackIosIcon />}
      label={label}
      onClick={ClickFunction}
      testId={label + 'Button'}
      variant={ButtonVariantTypes.Contained}
    />
  );
}
