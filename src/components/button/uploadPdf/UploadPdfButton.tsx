'useClient';

import React from 'react';
import { Button, ButtonColorTypes, ButtonVariantTypes } from '@ska-telescope/ska-gui-components';
import UploadFileIcon from '@mui/icons-material/UploadFile';

export default function UploadPdfButton() {

  const title = 'Supporting PDF';

  return (
    <Button
      ariaDescription={title + 'Button'}
      color={ButtonColorTypes.Secondary}
      icon={<UploadFileIcon/>}
      label={title}
      testId={title + 'Button'}
      variant={ButtonVariantTypes.Contained}
    />
  );
}
