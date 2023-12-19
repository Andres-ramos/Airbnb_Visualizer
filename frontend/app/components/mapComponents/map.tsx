import { MapContainer, Marker, Popup, TileLayer, Polygon , LayersControl, LayerGroup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import React, { useEffect, useState } from 'react';
import { API } from '../../api';

import {Airbnb, AirbnbServerResponse, MapProps, TileType} from "../../types"

import getIcon from "../../utils/icon"

import {DEFAULT_MAP_ZOOM, DEFAULT_MAP_CENTER} from "../../constants/index"

import { LeafletMouseEvent } from 'leaflet';
// import { GeoJSON } from 'geojson';

import census from 'citysdk'

import { LatLngExpression } from 'leaflet';
import { GeoJSON } from 'geojson';
import { censusAPI } from '../../censusAPI';

import Tile from "./tile";
import Listing from "./listing";

const _ = require('lodash');


const Map = ({dispatch, listings,tiles, host,setHost}: MapProps) => {
  let selectedListings:any=[];
  if(host){
    // const host = airbnb.host;
    const groupByHost = (airbnb:AirbnbServerResponse) => {
      return airbnb.host;
    }
    const groupedData = _.groupBy(listings, groupByHost)
    selectedListings = groupedData[host]
  }

  return (
    <MapContainer
    center={ DEFAULT_MAP_CENTER} zoom={DEFAULT_MAP_ZOOM} style={{height: 800, width: "100%"}}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LayersControl position="topright">
        <LayersControl.Overlay name="Airbnbs">
          <LayerGroup>
            {listings.map((airbnb:any) => {
              return <Listing airbnb={airbnb} dispatch={dispatch} color={"red"} setHost={setHost}/> 
            })}
            {/* Figure out how to increase the z-index for the selected markers */}
            {selectedListings.map((airbnb:any) => {
              return <Listing 
                airbnb={airbnb} 
                dispatch={dispatch} 
                color={"blue"} 
                setHost={setHost}
                /> 
            })}
          </LayerGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Tiles">
          <LayerGroup>
            {tiles.map((feature:TileType) => {
              return <Tile feature={feature} dispatch={dispatch}/>
            })}
          </LayerGroup>
        </LayersControl.Overlay>
      </LayersControl>
      
    </MapContainer>
  )
}

export default Map
