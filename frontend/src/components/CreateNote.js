import React, { useState, useEffect } from 'react';
import Axios from 'axios';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const CreateNote = () => {
    // varibles de estado 
    const url = 'http://localhost:4000/api/users';
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [userName, setUserName]=('');

  //*************************** */
  const [firstName, setFirstName] = useState('');
  
  const [people, setPeople] = useState([]);

 
//   obtener datos de backend
const getUsers = async () => {
    try {
      const response = await Axios.get(url);
      const users = await response.data;
      setUsers(users);
      setLoading(false);
    }catch(error){
    console.log(error);
}
  };

  useEffect(() => {
    getUsers();
    
  }, [setUsers]);
////////////////////////
const handleSubmit = async (e) => {
    e.preventDefault();
  
    
    if (firstName) {
 const res = await Axios.post('http://localhost:4000/api/users',{username: firstName});
      const person = { id: new Date().getTime().toString(), firstName };
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName('');
      console.log(res);
     
    } else {
      console.log('empty values');
    }
  };



  return (
    <>
      <div className="row">
      <h2>{loading ? 'loading...' : 'data'}</h2>
      <div className="col-md-4">
        <div className="card card-body">
          <h3>Create new User</h3>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value)
                e.preventDefault();
              }}
            />
          </div>
          
          <button type='submit'>add person</button>
        </form>

        {/* //render the data
         */}
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
         {/* esto es un coment */}
        {people.map((person, index) => {
          const { id, firstName,  } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
            
            </div>
          );
        })}
      </div>
      </div>
      </div>
    </>
  );
};

export default CreateNote;

