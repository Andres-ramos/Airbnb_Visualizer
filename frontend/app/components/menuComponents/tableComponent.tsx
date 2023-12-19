import {useTable} from "react-table";


const TableComponent = ({hostListings}: any) => {

    const keysToCopy = ["property_id", "average_daily_rate_ltm", "title", 
    "revenue_ltm", "revenue_potential_ltm", "market_name","listing_type" ];

    // Selects columns from keysToCopy
    const c = hostListings[0]
    const cols = Object.keys(c).reduce((acc, key) => {
        if (keysToCopy.includes(key)) {
            acc[key] = { Header:key, accessor: key};
        }
        console.log("acc", acc);
        return acc;
    }, {});    
    const columns = Object.values(cols)

    // Selects only the columnds from keysToCopy
    const cleanRows = hostListings.map((entry:any) => {
        return Object.keys(entry).reduce((acc, key) => {
            if (keysToCopy.includes(key)) {
                acc[key] = entry[key];
            }
            return acc;
        }, {});
    })

    return (
        <Table columns={columns} data={cleanRows}>
        </Table>
    )
    
}

// Define the Table component
const Table = ({ columns, data }:any) => {
    // Create an instance of the useTable hook
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
      columns,
      data,
    });
  
    // Render the table
    return (
      <table {...getTableProps()} style={{ border: '1px solid black', width: '100%' }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} style={{ borderBottom: '1px solid black' }}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} style={{ padding: '10px', border: '1px solid black' }}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

export default TableComponent