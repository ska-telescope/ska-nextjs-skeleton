'use client';

import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { storageObject } from '@ska-telescope/ska-gui-local-storage';
import { Footer, Header } from '@ska-telescope/ska-gui-components';
import theme from '../../services/theme/theme';

export default function ThemeClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const { themeMode } = storageObject.useStore();
  const skao = 'toolTip.button.skao';
  const mode = 'toolTip.button.mode';
  const toolTip = { skao, mode };
  const version = 'DRAFT'; // process.env.VERSION;

  return (
    <ThemeProvider theme={theme(themeMode.mode)}>
      <CssBaseline enableColorScheme />
      <Header
        testId="headerId"
        title="SKA nextJS skeleton"
        toolTip={toolTip}
        selectTelescope={false}
      />
      {children}
      <Footer testId="footerId" version={version} />
    </ThemeProvider>
  );
}
