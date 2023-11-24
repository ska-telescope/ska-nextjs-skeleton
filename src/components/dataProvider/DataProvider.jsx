'use client';

import React from 'react';
import JSONData from './data.json';

export const DataContext = React.createContext();

const DataProvider = ({ children }) => {
  return (
    <DataContext.Provider value={{ data: JSONData.ppt }}>
      { children }
    </DataContext.Provider>
  );
};

export default DataProvider;