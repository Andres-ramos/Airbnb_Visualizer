import getIcon from "../../utils/icon"

import { Marker } from 'react-leaflet'

import {Airbnb, AirbnbServerResponse, ListingProps} from "../../types"

import {geoJsontoLatLngExpression} from "../../utils"


const Listing = ({ airbnb, dispatch, color, setHost}: ListingProps) => {

    const onClick = (airbnb:AirbnbServerResponse) => {
        const menuType = "ListingMenu";
        const action = {type:menuType, payload: airbnb}
        const host = airbnb.host
        dispatch(action)
        setHost(host)
    }

    let selected = false;
    if(color == "blue"){
        selected=true;
    }
    const icon = getIcon(color, selected);
    const airbnbLocation = geoJsontoLatLngExpression(airbnb.location);

    return (
        <Marker
            position={airbnbLocation}
            icon={icon}
            eventHandlers={{
                click: () => onClick(airbnb),   
            }}
            >
        </Marker>
    )
}

export default Listing;