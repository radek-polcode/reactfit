import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

import Badges from './Badges';
import dummyData from './dummyData';
import Friends from './Friends';
import LifetimeStats from './LifetimeStats';
import TimeSeriesBarChart from './TimeSeriesBarChart';

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = dummyData;
  }

  fetchFitbitData (url, fitbitToken, stateKey,) {
    axios({
      method: 'get',
      url: url,
      headers: { 'Authorization': 'Bearer ' + fitbitToken },
      mode: 'cors'
    })
    .then(response => {
      console.log(response)
      this.setState({
        [stateKey]: response.data
      })
    })
    .catch(error => console.log(error))
  }

  componentDidMount () {
    if(window.location.hash) {
      let fitbitToken = window.location.hash.slice(1).split("&")[0].replace("access_token=", "")
      this.setState(
        {
          loggedIn: true
        }
      )

      this.fetchFitbitData(
        'https://api.fitbit.com/1/user/-/profile.json',
        fitbitToken,
        'user'
      )

      this.fetchFitbitData(
        'https://api.fitbit.com/1/user/-/activities.json',
        fitbitToken,
        'lifetimeStats'
      )

      this.fetchFitbitData(
        'https://api.fitbit.com/1/user/-/badges.json',
        fitbitToken,
        'badges'
      )

      this.fetchFitbitData(
        'https://api.fitbit.com/1/user/-/activities/steps/date/2018-11-30/1m.json',
        fitbitToken,
        'steps'
      )

      this.fetchFitbitData(
        'https://api.fitbit.com/1/user/-/activities/distance/date/2018-11-30/1m.json',
        fitbitToken,
        'distance'
      )

      this.fetchFitbitData(
        'https://api.fitbit.com/1/user/-/friends/leaderboard.json',
        fitbitToken,
        'friends'
      )
      console.log(this.state.badges)
      
    } 
  }

  render () {
    return (
      <div className="container">
        <header className="text-center">
          <span className="float-right">{this.state.user.displayName}</span>
          <h1 className="page-header">ReactFit</h1>
          <p className="lead">Your personal fitness dashboard</p>
        </header>
        {!this.state.loggedIn &&
          <div className="text-center">
            <a href="https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22DCXM&redirect_uri=http%3A%2F%2Flocalhost%3A3000&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800">
              Log in with fitbit
            </a>
          </div>
        }
        <div className="row">
          <div className="col-lg-3">
            <LifetimeStats 
              lifetimeStats={this.state.lifetimeStats}
            />
            <Badges 
              badges={this.state.badges.badges}
            />
          </div>
          <div className="col-lg-6">
            <TimeSeriesBarChart 
              data={this.state.steps["activities-steps"]}
              title="Steps"
              yMax={8000}
            />
            <TimeSeriesBarChart 
              data={this.state.distance["activities-distance"]}
              title="Distance (km)"
              yMax={6}
            />
          </div>
          <div className="col-lg-2 col-lg-offset-1">
            <div className="card">
              <div className="card-header">
                Your friends
              </div>
              <div className="card-body">
                <Friends friends={this.state.friends.friends} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Dashboard name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})