/* eslint-disable @typescript-eslint/no-explicit-any */
'useClient';
import React from 'react';
import { DataGrid } from '@ska-telescope/ska-gui-components';

interface DataGridWrapperProps {
    rows: any;
    extendedColumns: any;
    height: number;
    // eslint-disable-next-line @typescript-eslint/ban-types
    rowClick: Function;
  }

export default function DataGridWrapper({rows, extendedColumns, height, rowClick}:DataGridWrapperProps) {

  return (
    <DataGrid
      testId={rows}
      columns={extendedColumns}
      height={height}
      onRowClick={rowClick}
      rows={rows}
    />
  );
}