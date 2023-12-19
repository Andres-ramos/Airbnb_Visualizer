import {AirbnbServerResponse, AirbnbTableProps} from "../../types"

const AirbnbTable = ({listings}: AirbnbTableProps) => {

    const columns = ["id", "property_id", "listing_type", 
    "revenue_ltm", "average_daily_rate_ltm", "title"];

    return (
      <div  className="overflow-auto object-bottom border-spacing-1">
        <table>
          <thead>
            {columns.map((col, index) => {
              return <th className="p-2 text-center" key={index}>{col}</th>
            })}
          </thead>
          <tbody>
            {listings.map((airbnb:AirbnbServerResponse, rowIndex:integer) => {
                return (
                  <tr key={rowIndex}>
                    {columns.map((col, colIndex) => {
                      return <td className="p-2 text-center text-white"
                        key={colIndex}>{airbnb[col]}</td>
                    })}
                  </tr>
                )
            })}
          </tbody>
        </table>
      </div>
      
    )
  }
  
export default AirbnbTable