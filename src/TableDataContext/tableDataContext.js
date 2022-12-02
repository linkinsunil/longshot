import { createContext, useContext, useState } from 'react';
import { data } from '../utils/data';

const RowDataContext = createContext();

const RowDataProvider = ({ children }) => {
  const [rowData, setRowData] = useState(data.raw_broadmatch_data[0]);
  console.log(data.raw_broadmatch_data[0]);
  return (
    <RowDataContext.Provider value={{ rowData, setRowData }}>
      {children}
    </RowDataContext.Provider>
  );
};

const useRowData = () => useContext(RowDataContext);

export { RowDataProvider, useRowData };
