'useClient';
import React from 'react';
import { Footer } from '@ska-telescope/ska-gui-components';

export default function FooterWrapper() {
  const version = 'PoC'; // process.env.VERSION;

  return <Footer testId="footerId" version={version} />;
}
