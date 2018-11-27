import React from 'react';

const Friends = ({friends}) =>
  <div className="card">
    <div className="card-body">
      {
        friends.map((friend, i) => {
          return(
            <li key={i} className="list-group-item">
              <span className="badge">{friend.average.steps}</span>
              <img src={friend.user.avatar} 
                   style={
                     {height: 50,
                     left: 10, 
                     borderRadius: "50%"}
                   }
              />
              <h5>{friend.user.displayName}</h5>
            </li>
          )
        })
      }
    </div>
  </div>  

export default Friends