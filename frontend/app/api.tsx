import { LatLngBoundsExpression } from 'leaflet';
import { BASE_URI, AIRBNB_ENDPOINT } from './constants';
import { Airbnb, AirbnbServerResponse } from './types/index';

// TODO: Analyze and figure out how to solve mismatch in fields from db and fields in frontend
export class API {
  endpoint: string | null;

  constructor() {
    this.endpoint = null;
  }

  coordTransformation = (locationString:string) => {
    const regex = /POINT \((-?\d+\.\d+) (-?\d+\.\d+)\)/;
    const match = regex.exec(locationString);

    if (match) {
      const [fullMatch, lng, lat] = match;
      const result = {
        lat: parseFloat(lat),
        lng: parseFloat(lng),
      };
      return result
    } else {
      console.log('No match found in the input string.');
    }
  }

  listAirbnb = async (): Promise<AirbnbServerResponse[]> => {
    try {
      const response: any = await fetch(BASE_URI + AIRBNB_ENDPOINT, {
        method: 'GET',
        redirect:'follow',
        mode: 'cors',
        headers:{Accept: 'application/json','Content-Type': 'application/json'}
      });

      if(!response.ok){
        throw new Error('Network response was not ok');
      }

      const r = await response.json();
      const airbnbs: AirbnbServerResponse[] = r.map((entry: AirbnbServerResponse) => ({
        id: entry.id,
        location : entry.location,
        property_id : entry.property_id,
        airbnb_property_id: entry.airbnb_property_id,
        vrbo_property_id: entry.vrbo_property_id,
        listing_type: entry.listing_type,
        bedrooms: entry.bedrooms,
        bathrooms: entry.bathrooms,
        accommodates: entry.accommodates,
        rating: entry.rating,
        reviews: entry.reviews,
        title: entry.title,
        revenue_ltm: entry.revenue_ltm,
        revenue_potential_ltm: entry.revenue_potential_ltm,
        occupancy_rate_ltm: entry.occupancy_rate_ltm,
        average_daily_rate_ltm: entry.average_daily_rate_ltm,
        days_available_ltm: entry.days_available_ltm,
        market_id: entry.market_id,
        market_name: entry.market_name,
        host: entry.host
      }));
      return airbnbs;
    } catch (e) {
      // TODO: Throw informative error 
      return e;
    }
  };
}