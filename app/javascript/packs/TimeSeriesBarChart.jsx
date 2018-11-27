import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const TimeSeriesBarChart = ({data, title, yMax}) =>
  <div className="card">
    <div className="card-header">
      {title}
    </div>
    <div className="card-body">
      <BarChart width={500} height={300} data={data}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey="dateTime"/>
      <YAxis domain={[0, yMax]}/>
      <Tooltip/>
      <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  </div>


export default TimeSeriesBarChart