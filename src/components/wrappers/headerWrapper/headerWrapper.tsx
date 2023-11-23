'useClient';
import React from 'react';
import { Header } from '@ska-telescope/ska-gui-components';

export default function HeaderWrapper() {

  const skao = 'Go to Website';
  const mode = 'Toggle display mode';
  const toolTip = { skao, mode };

  return (
    <Header
      testId="headerId"
      title="Proposal Preparation Tool"
      toolTip={toolTip}
      selectTelescope={false}
    />
  );
}
