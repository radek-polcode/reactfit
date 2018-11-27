import React from 'react';

const LifetimeStats = ({lifetimeStats}) => 
  <div className="card">
    <div className="card-header">
      <h4>Lifetime stats</h4>
    </div>
    <div className="card-body">
      <h4>Distance</h4>
      <p>Total {lifetimeStats.lifetime.total.distance} km</p>
      <p>Best {lifetimeStats.best.total.distance.value} 
        on {lifetimeStats.best.total.distance.date}
      </p>
      <h4>Steps</h4>
      <p>Total: {lifetimeStats.lifetime.total.steps.value}</p>
      <p>Best: {lifetimeStats.best.total.steps.value}</p>
    </div>
  </div>


export default LifetimeStats