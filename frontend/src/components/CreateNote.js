import React, { useState, useEffect } from "react";
import Axios from "axios";
function CreateNote() {
  const url = "http://localhost:4000/api/users/";
  const [users, setUser] = useState([]);
  const getUsers = async () => {
    const res = await Axios.get(url);
    const data = await res.data;
    setUser(data);
  };
  //  se llama los datos al montar el componente
  useEffect(() => {
    getUsers();
  }, [setUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleonChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="col-md-6 offset-md-3">
      <div className="card card-body">
        <h4>Create note</h4>
        <form onSubmit={handleSubmit}>
          <select
            className="form-control"
            name="userSelected"
            onChange={handleonChange}
          >
            {users.map((user) => (
              <option key={user._id} value={user.username}>
                {user.username}
              </option>
            ))}
          </select>

          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateNote;
