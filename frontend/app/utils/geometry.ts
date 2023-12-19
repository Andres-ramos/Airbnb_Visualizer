import { LatLngExpression } from "leaflet";
import { TileType } from "../types";

const geoJsontoLatLngExpression = (geojson:GeoJSON.Point): LatLngExpression => {
    const [lng, lat] = geojson.coordinates;
    return {"lng": lng, "lat":lat}
}

// Not being used
const tileToLatLngExpression = (tile: TileType): any => {
  console.log("tile geometry", tile);
  switch(tile.type){
    case "Feature":
      const polygons = tile.geometry.coordinates
      const a = polygons.map((polygonList:any) => {
        // console.log("polu list", polygonList)
        return polygonList.map((latLngArray:[number, number])=> {
          return {
            "lng": latLngArray[0],
            "lat" : latLngArray[1]
        }
        })
        
      })
      console.log('a', a)
      return a

    case "FeatureCollection":{
      console.log("feature coll", tile);
      return 1
    }
  }
}

const formatGeoJson = (res:GeoJSON.FeatureCollection): LatLngExpression[]  =>{
    const f = res;
    const polys = f['features'].map((feature:GeoJSON.Feature) => {
    let coords:any = feature['geometry']['coordinates'][0];
    let reverseCoords = coords.map((lngLatList:number[]) =>{
      return [lngLatList[1],lngLatList[0]]
      });
      return reverseCoords
    });
    return polys
  }

export { geoJsontoLatLngExpression, formatGeoJson, tileToLatLngExpression}