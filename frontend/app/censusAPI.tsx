import census from 'citysdk'
import { CensusApiResponse } from './types'

export class censusAPI {
  // Request population data for each tract 
  // Request housing units 
  // Request rental units 
  // Median Rent, median unit price, housing sales volume, %housing units used for str, housing sales volume
  // poverty rate, 
  createRequestObject = () =>{
  return {
    "geoHierarchy": { 
        "state": {
            "lng": -66.03388992703064,
            "lat":18.413040948938743
        },
        "tract": "*"
        
      },
      "geoResolution": '500k', // required
      "vintage" : 2017
    }
  }

    sendRequest = async (censusObject:any): Promise<string> => {
      return new Promise((resolve, reject) => {
        census(censusObject,(error:string, result:string) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
          });
        })
      }
    
    getTracts = async (aoi:any): Promise<CensusApiResponse> => {
      // TODO: Filter census data by aoi
      const censusObject = this.createRequestObject();
      const tracts:string = await this.sendRequest(censusObject);
      return JSON.parse(tracts);
    }
}