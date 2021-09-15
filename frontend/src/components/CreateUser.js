import React, { useState, useEffect } from "react";
import Axios from "axios";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const CreateUser = () => {
  // varibles de estado
  const url = "http://localhost:4000/api/users/";
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  //*************************** */
  const [firstName, setFirstName] = useState("");

  //   obtener datos de backend
  const getUsers = async () => {
    try {
      const response = await Axios.get(url);
      const users = await response.data;
      setUsers(users);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const userDelete = async (id) => {
    await Axios.delete(url + id);
    getUsers();
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);
  ////////////////////////
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (firstName) {
      const res = await Axios.post("http://localhost:4000/api/users", {
        username: firstName,
      });
      setFirstName("");
      console.log(res);
    } else {
      console.log("empty values");
    }
    getUsers();
  };

  return (
    <div className="row">
      <h2>{loading ? "loading..." : "data"}</h2>
      <div className="col-md-4">
        <div className="card card-body">
          <h3>Create new User</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="firstName"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>

            <button type="submit">add person</button>
          </form>
        </div>
      </div>
      {/* //render the data  */}
      <div className="col-md-8">
        <ul className="list-group">
          {users.map((user) => {
            const { _id, username } = user;
            return (
              <li
                className="list-group-item list-group-item-action"
                key={_id}
                onDoubleClick={() => {
                  userDelete(_id);
                }}
              >
                <h4>{username}</h4>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CreateUser;
