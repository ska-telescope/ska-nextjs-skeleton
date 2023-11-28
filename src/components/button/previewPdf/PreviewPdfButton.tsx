'useClient';

import React from 'react';
import { Button, ButtonColorTypes, ButtonVariantTypes } from '@ska-telescope/ska-gui-components';

export default function PreviewPdfButton({onClick}) {

  const title = 'Preview PDF';

  return (
    <Button
      ariaDescription={title + 'Button'}
      color={ButtonColorTypes.Secondary}
      label={title}
      onClick={onClick}
      testId={title + 'Button'}
      variant={ButtonVariantTypes.Contained}
    />
  );
}
