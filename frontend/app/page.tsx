'use client'
import { useMemo, useReducer, useContext, createContext } from "react";
import dynamic from 'next/dynamic'

import { SideMenu } from "./components"

import React, { useEffect, useState } from 'react';

import {Airbnb, AirbnbServerResponse, CensusApiResponse, TileType} from "./types"

import census from 'citysdk'

import { LatLngExpression } from 'leaflet';
import { GeoJSON } from 'geojson';
import { censusAPI } from './censusAPI';
import { API } from './api';

import {formatGeoJson} from "./utils"


import {reducer} from "./reducers"
// import { createContext } from "vm";


const api = new API();
const censusapi = new censusAPI();

// export const listingContext = createContext("")

export default function Home() {
  const [listings, setListings] = useState<AirbnbServerResponse[]>([])
  const [host, setHost] = useState<string>('')
  const [tiles, setTiles] = useState<TileType[]>([])
  const [selection, dispatch] = useReducer<any>(reducer,{type:"ListingMenu", payload:listings[0]})

  useMemo(() => {
    const fetch = async () => {
      const listings:AirbnbServerResponse[] = await api.listAirbnb();
      await setListings(listings)

    }
    fetch();
  }, []);

  useMemo(() => {
    const fetch = async () =>{
      const aoi = 1;
      const data:CensusApiResponse = await censusapi.getTracts(aoi);
      const tiles: TileType[] = data.features
      setTiles(tiles);
    }
    fetch()    
  }, []);


  const Map = useMemo(() => dynamic(
    () => import('@/app/components/mapComponents/map'),
    {
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), [])
  
  return (<div className="flex">
    <div className="w-2/3 p-5">
      <Map dispatch={dispatch} listings={listings} host={host}  setHost={setHost} tiles={tiles}/>
    </div>
    <div className="w-1/3 h-full flex-2/3">
      <SideMenu selection={selection} listings={listings} tiles={tiles} setHost={setHost}/>
    </div>

  </div>
  )

}
