import {Airbnb, AirbnbServerResponse, listingMenuProps} from "../../types"
import AirbnbTable from "./airbnbTable"
import AirbnbInfo from "./airbnbInfoPanel";

import {useState, useEffect, useRef} from 'react'

import TableComponent from "./tableComponent"

import * as d3 from "d3";

// import {Airbnb, AirbnbServerResponse} from "../types"

const _ = require('lodash');


const ListingMenu = ({airbnb, listings, setHost}: listingMenuProps) =>{
  // Sets display for table or for graphs
  const [display, setDisplay] = useState<boolean>(true)
  const [title, setTitle] = useState<string>("Insights Menu")

  const host = airbnb.host;
  const groupByHost = (airbnb:AirbnbServerResponse) => {
    return airbnb.host;
  }

  const onClick = () => {
    setDisplay(!display)
    if(title === "Data Table")
    
      setTitle("Insights Menu")
    
    else {
      setTitle("Data Table")
    }
  }

  const groupedData = _.groupBy(listings, groupByHost)
  const hostListings = groupedData[host]

  const g = _.groupBy(hostListings, 'listing_type');
  const countByCategory = _.mapValues(g, group => _.size(group));
  console.log("cc", countByCategory)
// 
  if(listings.length > 0){
    return (
      <div className="p-3">
        <div className="bg-red-500 rounded-sm">
 
            <div className=" bg-red-400 text-xl top-3 flex justify-center items-center">
              <div className="w-full text-black text-center text-lg font-bold ">
                Host : {airbnb.host}
              </div>
              
            </div>

            <div className="w-full h-auto flex justify-center items-center py-2">
              <button className="w-auto h-8 content-center bg-white py-1 px-2 text-black rounded-md"
              onClick={onClick}> {title} 
              </button>
            </div>
            <div className=" p-2 overflow-auto overflow-y-auto">
              {display ? 
              <TableComponent hostListings={hostListings} ></TableComponent> :
               <ProfetionalizationPlot data={[countByCategory]}> </ProfetionalizationPlot>} 
            </div>
              
        </div>
        
      </div>
    )
  }          
}

const otherComponent = ({}) => {
  return <h1> hola </h1>;
}

type PlotType = {
  data: any
}



const ProfetionalizationPlot = ({data}:PlotType)=> {
  const svgRef:any = useRef();

  useEffect(() => {

    d3.select(svgRef.current).selectAll('*').remove();


    const tData = data.map((entry) => {
      return {
        category: Object.keys(entry)[0],
        value: Object.values(entry)[0]
      }
    })

    // const margin = { top: 20, right: 20, bottom: 30, left: 40 };



    
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const chartWidth = 300 - margin.left - margin.right;
    const chartHeight = 150 - margin.top - margin.bottom;

    // const xScale = d3.scaleBand()
    // .domain(categories)
    // .range([0, chartWidth])
    // .padding(0.1);

    // console.log("aca", xScale('entire_place'))
    // const yScale = d3.scaleLinear()
    //   .domain([0, d3.max(values)])
    //   .range([chartHeight,0]);

    const svg = d3.select(svgRef.current).append('svg')
      .attr('width', chartWidth + margin.left + margin.right)
      .attr('height', chartHeight + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const categories = tData.map(d => d.category);
    const values = tData.map(d => d.value);

    const xScale = d3.scaleBand()
      .domain(categories)
      .range([0, chartWidth])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(values)])
      .range([chartHeight, 0]);

    const xAxis = d3.axisBottom(xScale);
    svg.append('g')
      .attr('transform', `translate(0,${chartHeight})`)
      .call(xAxis);

    const yAxis = d3.axisLeft(yScale);
      svg.append('g')
      .call(yAxis);

    // Create bars
    svg.selectAll('rect')
      .data(tData)
      .enter().append('rect')
      .attr('x', (d) => xScale(d.category))
      .attr('y', (d) => yScale(d.value))
      .attr('width', 50 )
      .attr('height', d => chartHeight - yScale(d.value))
      .attr('fill', 'steelblue');
    })

  return (
    <svg className="z-10 overflow-auto"
    ref={svgRef}></svg>
  )
}

export default ListingMenu