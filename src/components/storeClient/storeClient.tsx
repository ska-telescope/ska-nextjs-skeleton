'use client';

import { Paper } from '@mui/material';
import { Spacer, SPACER_VERTICAL } from '@ska-telescope/ska-gui-components';
import { StoreProvider } from '@ska-telescope/ska-gui-local-storage';
import ThemeClient from '@/components/themeClient/themeClient';

const HEADER_HEIGHT = 70;
const FOOTER_HEIGHT = 20;

export default function StoreClient({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <ThemeClient>
        <Paper sx={{ height: '100vh' }}>
          <Spacer size={HEADER_HEIGHT} axis={SPACER_VERTICAL} />
          {children}
          <Spacer size={FOOTER_HEIGHT} axis={SPACER_VERTICAL} />
        </Paper>
      </ThemeClient>
    </StoreProvider>
  );
}
