
import React, { useState, useEffect } from 'react'

import Axios from 'axios';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN


const CreateUser = () => {
  const url = 'http://localhost:4000/api/users';
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [userName, setUserName]=('');

  const getUsers = async () => {
    try {
      const response = await Axios.get(url);
      const users = await response.data;
      setUsers(users);
      setLoading(false);
    }catch(error){
    console.log(error);
    
    }
    
  }

  useEffect(() => {
    getUsers();
    
  }, [setUsers]);

 //este es una propertyisenumerable
 const handleSubmit = (e) => {
  e.preventDefault();
  if (userName) {
    // const person = { id: new Date().getTime().toString(), firstName, email };
    // console.log(person);
    // setPeople((people) => {
    //   return [...people, person];
    // });
    // setUserName('');
  
  } else {
    console.log('empty values');
  }
};

 //este finaliza 

  

  // console.log(users);

   return (
    <div className="row">
      
      <h2>{loading ? 'loading...' : 'data'}</h2>
      <div className="col-md-4">
        <div className="card card-body">
          <h3>Create new User</h3>
          <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='userName'>userName : </label>
            <input
              type='userName'
              id='userName'
              name='userName'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <button type='submit'>add person</button>
          </form>
        </div>
      </div>
      <div className="col-md-8">
        <ul className="list-group">
        {users.map((user) => {
          const { id, username} = user;
          return (
            <li className="list-group-item list-group-item-action" key={id}>
              <h4>{username}</h4>
            </li>
          );
        })}
        </ul>
      </div>
    </div>
  )
}

export default CreateUser;
