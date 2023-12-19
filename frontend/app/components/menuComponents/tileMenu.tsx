import { AirbnbServerResponse } from "@/app/types";
import { AnyARecord } from "dns";
import TableComponent from "./tableComponent"

import {useState, useEffect, useRef} from 'react'

import * as turf from '@turf/turf';

type TileMenuProps = {
    tile: any,
    listings: AirbnbServerResponse[],
    tiles: any
}

console.log(turf.booleanPointInPolygon);
const TileMenu = ({tile, listings, tiles}: TileMenuProps) =>{

  const [display, setDisplay] = useState<boolean>(true)
  const [title, setTitle] = useState<string>("Insights Menu")

  const onClick = () => {
    setDisplay(!display)
    if(title === "Data Table")
    
      setTitle("Insights Menu")
    
    else {
      setTitle("Data Table")
    }
  }
  const l = tile.geometry.coordinates
  const polygon = turf.polygon(l)

  const listingsInAoi = listings.filter(point =>
    turf.booleanPointInPolygon(point.location.coordinates, polygon)
  );
  


  if(listingsInAoi.length > 0){
    return (
      <div className="p-3">
        <div className="bg-red-500 rounded-sm">
 
            <div className=" bg-red-400 text-xl top-3 flex justify-center items-center">
              <div className="w-full text-black text-center text-lg font-bold ">
                Census Tract : {tile.properties.TRACTCE}
              </div>
              
            </div>

            <div className="w-full h-auto flex justify-center items-center py-2">
              <button className="w-auto h-8 content-center bg-white py-1 px-2 text-black rounded-md"
              onClick={onClick}> {title} 
              </button>
            </div>
            <div className=" p-2 overflow-auto overflow-y-auto">
                {display ? 
                <TableComponent hostListings={listingsInAoi} ></TableComponent> :
                // <ProfetionalizationPlot data={[countByCategory]}> </ProfetionalizationPlot>} 
                <TableComponent hostListings={listingsInAoi} ></TableComponent> 
                } 
            </div>
              
        </div>
        
      </div>
    )
  }          
}

export default TileMenu