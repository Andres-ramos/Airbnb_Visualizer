import { AirbnbServerResponse, AirbnbInfoProps} from "@/app/types"

// Component for visualizing info of single airbnb
const AirbnbInfo = ({airbnb}: AirbnbInfoProps) => {
    return Object.keys(airbnb).map((key:string) => {
      return (
        <div className="text-center text-lg">
          <h1> {key} : {JSON.stringify(airbnb[key])} </h1>
        </div>
      )
    }) 
  }

export default AirbnbInfo