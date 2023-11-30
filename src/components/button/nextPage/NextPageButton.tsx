'useClient';

import React from 'react';
import { Button, ButtonColorTypes, ButtonVariantTypes } from '@ska-telescope/ska-gui-components';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface NextPageProps {
  label?: string;
  url?: string;
}

export default function NextPageButton({ label = '', url = '' }: NextPageProps) {
  const ClickFunction = () => {
    location.assign(url);
  };

  return (
    <Button
      ariaDescription={label + 'Button'}
      color={ButtonColorTypes.Secondary}
      icon={<ArrowForwardIosIcon />}
      label={label}
      onClick={ClickFunction}
      testId={label + 'Button'}
      variant={ButtonVariantTypes.Contained}
    />
  );
}
