import {ListingMenu, TileMenu, HeatMapMenu} from "../index"

import {Airbnb, AirbnbServerResponse, SideMenuProps} from "../../types"


const SideMenu = ({selection, listings, tiles, setHost}: SideMenuProps) => {
    if(selection.payload){    
        const menuMap:object = {
            ListingMenu: generateListingMenu,
            HeatMap: generateHeatMapMenu,
            TileMenu: generateTileMenu

        }

        return menuMap[selection.type](selection.payload, listings, tiles, setHost);
    }

}

const generateListingMenu = (airbnb:AirbnbServerResponse, listings:AirbnbServerResponse[], tiles:any, setHost:any) => {

    return (
        <ListingMenu airbnb={airbnb} listings={listings} setHost={setHost}/>
    )
}

 const generateTileMenu = (tile:any, listings:AirbnbServerResponse[], tiles:any) => {
    return (
        <TileMenu tile={tile} listings={listings} tiles={tiles}/>
    )
 }

 const generateHeatMapMenu = (payload:any, listings:Airbnb[], tiles:any) => {
    return (
        <HeatMapMenu/>
    )
 }

export default SideMenu