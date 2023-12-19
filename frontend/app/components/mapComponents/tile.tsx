import {Polygon, GeoJSON } from 'react-leaflet'
import {TileType} from "../../types"
import {tileToLatLngExpression} from "../../utils/geometry"

type Props = {
    feature: TileType;
    dispatch: any
  };

const Tile = ({ feature, dispatch}: Props):any => {

    const hoverChange = (polygon:any) => {
        // setMenuInfo("mensaje on hover")
        return 1;

    }

    const hoverReset = () => {
        // setMenuInfo('mensaje on out')
        return 1;
    }

    const onClick = (polygon: any) => {
        const action = {type:'TileMenu', payload: polygon}
        dispatch(action)
    }

    return (<GeoJSON data={feature}
         eventHandlers={{
        //    mouseover: (e) => hoverChange(polygon),
        //    mouseout : () => hoverReset(),
           click : () => onClick(feature)
         }} />
    )
}

export default Tile