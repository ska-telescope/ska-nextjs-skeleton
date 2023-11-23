//
// In here we can put all the initial and static data.
// I have this working to initialize on the SCIENCE page as an example
//

'use client';

import { createContext } from 'react';

export const DataContext = createContext();

const DataProvider = ({ children }) => {

  const listData = [
    { 'id': 'SKA2388', 'title': 'The Milky Way View', 'Cycle': 'SKA_5000_2023', 'pi': 'Van Loo Cheng', 'status': 'Submitted', 'lastUpdated' : '21/11/2023' },
    { 'id': 'SKA2311', 'title': 'The Milky Way View', 'Cycle': 'SKA_5000_2023', 'pi': 'Van Loo Cheng', 'status': 'Submitted', 'lastUpdated' : '21/11/2023'},
    { 'id': 'SKA2399', 'title': 'The Giant HII in the Orion', 'Cycle': 'SKA_5000_2023', 'pi': 'Keeper Sung', 'status': 'Accepted', 'lastUpdated' : '1/11/2023'},
    { 'id': 'SKA2319', 'title': 'The Dancing Star', 'Cycle': 'SKA_5000_2023', 'pi': 'Precious Luthan', 'status': 'Draft', 'lastUpdated' : '21/12/2022'},
    { 'id': 'SKA2317', 'title': 'Ionization in the Spiral galaxy', 'Cycle': 'SKA_5000_2023', 'pi': 'Ma James Nuka', 'status': 'Withdrawn', 'lastUpdated' : '21/01/2023'}
  ];

  const DEFAULT_LATEX = 'We give illustrations for the three processes $e^+e^-$, gluon-gluon and $\\gamma\\gamma \\to W t\\bar b$.';

  const proposalData = {
    science: DEFAULT_LATEX,
  };

  return (
    <DataContext.Provider value={{ listData: listData, proposalData: proposalData }}>
      { children }
    </DataContext.Provider>
  );
};

export default DataProvider;