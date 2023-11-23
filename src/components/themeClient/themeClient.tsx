import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { storageObject } from '@ska-telescope/ska-gui-local-storage';
import FooterWrapper from '@/components/wrappers/footerWrapper/footerWrapper';
import HeaderWrapper from '@/components/wrappers/headerWrapper/headerWrapper';
import theme from '@/services/theme/theme';

export default function ThemeClient({ children }: { children: React.ReactNode }) {
  const { themeMode } = storageObject.useStore();

  return (
    <ThemeProvider theme={theme(themeMode.mode)}>
      <CssBaseline enableColorScheme />
      <HeaderWrapper />
      {children}
      <FooterWrapper />
    </ThemeProvider>
  );
}
