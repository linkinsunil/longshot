import './Table.css';
import { data } from '../../utils/data';
import { useEffect, useState } from 'react';
import { useRowData } from '../../TableDataContext/tableDataContext';

const Table = ({ tableCategory }) => {
  const { rowData, setRowData } = useRowData();

  const [tableData, setTableData] = useState(null);

  const handleTableData = () => {
    if (tableCategory === 'Broad Match') {
      setTableData(data?.raw_broadmatch_data);
    } else if (tableCategory === 'Related') {
      setTableData(data?.raw_related_data);
    } else {
      setTableData(data?.raw_question_data);
    }
  };

  useEffect(() => {
    handleTableData();
  }, [tableCategory]);

  const showTableData = (e, currentRow) => {
    console.log(e.target.checked);
    setRowData(currentRow);
  };

  return (
    <div className='tableContainer'>
      <table>
        <tbody>
          <tr>
            <th>
              <input type='checkbox' />
            </th>
            {data?.columnNames?.map(
              (name, index) => index !== 6 && <th key={index}>{name}</th>
            )}
          </tr>
          {tableData?.map((object, index) => (
            <tr key={index}>
              <td>
                <input
                  type='checkbox'
                  onChange={e => showTableData(e, object)}
                />
              </td>
              {object.map(
                (value, index) => index !== 6 && <td key={index}>{value}</td>
              )}
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
