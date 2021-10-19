import React from 'react';

import { geoPath, geoMercator } from 'd3-geo';
// import { select } from "d3-selection";
// import { feature } from 'topojson';

// import test from "./index.css";
import CSS from "./index.module.css";

interface ITimezonePickerProps {
  data: any,
  loading?: boolean
}

interface IHandleMouseover {
  index: number,
  event?: React.MouseEvent,
  val?: any
}
 
function TimezonePicker({ data, loading = false }: ITimezonePickerProps) {
  let geoGenerator: any = null;

  const [cp, setDate] = React.useState<any[]>([]);
  const [activePath, setActivePath] = React.useState<number | null>(null);

  function handleMouseover({ index }: IHandleMouseover) {
    let newData = [...cp];
    newData[index] = { ...newData[index], hover: true };
    setDate(newData);
  }

  function handleMouseout({ index }: IHandleMouseover) {
    let newData = [...cp];
    newData[index] = { ...newData[index], hover: false };
    setDate(newData);
  }

  function handleClick({ index }: IHandleMouseover) {
    setActivePath(index);
  }

  React.useEffect(() => {
    if (loading === false && data !== undefined) {
      const projection = geoMercator();
      geoGenerator = geoPath().projection(projection);

      console.log(loading);

      const op: any[] = [];

      data.features.forEach((obj: any) => {
        console.log(obj);
        op.push({ path: geoGenerator(obj), ...obj });
      })

      setDate(op);
    }

  }, [loading])

  return <svg width="100%" height="100%">
    <g className="map">
      {cp.map((val: any, index) => {
        console.log(CSS);
        let pathClassName = CSS.path;
        if (val.hover) {
          pathClassName += " " + CSS["path-hover"];
        }
        if (activePath === index) {
          pathClassName += " " + CSS["path-active"];
        }
        return <path 
          className={pathClassName} 
          key={index} 
          d={val.path}
          onClick={(e)=> handleClick({ val, index, event: e })}
          onMouseOver={(e) => handleMouseover({ val, index, event: e })}
          onMouseOut={(e) => handleMouseout({ val, index, event: e })}
        />
      })}
    </g>
  </svg>
}

export default TimezonePicker;
