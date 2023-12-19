import { Icon } from 'leaflet';
// import {
//   ABANDONED_PROPERTY,
//   CONSTRUCTION,
//   DEFORESTATION,
//   OFFICIAL_SIGN,
//   ROAD_OBSTRUCTION,
//   SALE,
// } from '../constants';

// TODO: Make the keys an import
// Can be used to modify the colors depending on type
// const obsTypeColorMap: any = {
//   [SALE]: 'red',
//   [OFFICIAL_SIGN]: 'blue',
//   [CONSTRUCTION]: 'yellow',
//   [DEFORESTATION]: 'orange',
//   [ABANDONED_PROPERTY]: 'green',
//   [ROAD_OBSTRUCTION]: 'violet',
// };

// Helper function; Returns icon with given color
const iconCreator = (color: string, size:any, iconAnchor:any) => {
  return new Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: size,
    iconAnchor: iconAnchor,
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
};
// Returns the icon for given type
const getIcon = (color:string, selected:boolean) => {
  if(selected){
    let size = [40, 60]
    let iconAnchor = [17.5, 45]
    return iconCreator(color, size, iconAnchor);
  }
  let size = [25, 41]
  let iconAnchor = [12, 41]
  return iconCreator(color, size, iconAnchor);
  
};

// const getIconUrl = (color: string) => {
//   return `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`;
// };

export default getIcon;