import React from 'react';
import 'tachyons';

const Users = ({loading,users}) => {
    return loading ? (   
          <div id="main">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="Loaading.." className="loader"/>
          </div>
        ) : 
        (
          <div className='row' id="main">
    
          {users.map(user =>
                      <div className="col-sm-6 col-md-4 grow">
                        <div className="user">
                          <img src={user.avatar} alt={user.avatar} className="pic"></img>
                          <p>User ID: {user.id}</p>
                          <h1 className="name">{user.first_name} {user.last_name}</h1>
                          <p className="email">{user.email}</p>
                          
                        </div>
                      </div>
            )
          }
          </div>
        )
}

export default Users;