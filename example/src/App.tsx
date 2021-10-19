import React from 'react'

import TimezonePicker from 'timezone-picker'
import 'timezone-picker/dist/index.css'
import data from "./geojson/countries_110m.json";

const App = () => {
  return <TimezonePicker data={data} />
}

export default App
