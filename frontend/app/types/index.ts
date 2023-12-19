import { type LatLngExpression } from 'leaflet';

export type Airbnb = {
    id: number,
    location: LatLngExpression,
    property_id: string,
    airbnb_property_id: string | null,
    vrbo_property_id: string | null,
    listing_type: string,
    bedrooms: number,
    bathrooms: number | null,
    accommodates: number,
    rating: number | null,
    reviews: number | null,
    title: string,
    revenue_ltm: number,
    revenue_potential_ltm: number,
    occupancy_rate_ltm: number,
    average_daily_rate_ltm: number,
    days_available_ltm: number,
    market_id: number,
    market_name: string | null
}

export type AirbnbServerResponse = {
    id: number,
    location: GeoJSON.Point,
    property_id: string,
    airbnb_property_id: string | null,
    vrbo_property_id: string | null,
    listing_type: string,
    bedrooms: number,
    bathrooms: number | null,
    accommodates: number,
    rating: number | null,
    reviews: number | null,
    title: string,
    revenue_ltm: number,
    revenue_potential_ltm: number,
    occupancy_rate_ltm: number,
    average_daily_rate_ltm: number,
    days_available_ltm: number,
    market_id: number,
    market_name: string | null,
    host: string
}


export type CensusApiResponse = {
    type: any,
    fileName: string,
    features: TileType[]
}

export type TileType = {
    type: any,
    geometry: Geometry,
    properties: any
}

export type Geometry = {
    bbox : [],
    coordinates: [],
    type: string
}

export type ListingProps = {
    airbnb: AirbnbServerResponse,
    dispatch: any,
    color: string,
    setHost:any
}


export type AirbnbInfoProps = {
    airbnb: AirbnbServerResponse
}

export type AirbnbTableProps = {
    listings: AirbnbServerResponse[]
}

export type listingMenuProps = {
    airbnb: AirbnbServerResponse,
    listings:AirbnbServerResponse[],
    setHost: any
}

export type SideMenuProps = {
    selection: any,
    listings: AirbnbServerResponse[],
    tiles: any,
    setHost: any 
};

export type MapProps = {
    dispatch: any,
    listings: AirbnbServerResponse[],
    // selectedListings: AirbnbServerResponse[] | null,
    tiles: TileType[],
    host: string,
    setHost:any
}


