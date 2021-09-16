import React, { useState, useEffect } from "react";
import Axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function CreateNote() {
  const url = "http://localhost:4000/api/users/";
  const [users, setUser] = useState([]);
  const [userSelected, setUserSelected] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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
  const handleInputChange = (e) => {
    // console.log(e.target.value, e.target.name);
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "content") {
      setContent(e.target.value);
    } else if (e.target.name === "userSelected") {
      setUserSelected(e.target.value);
    }
    console.log(title);
  };
  return (
    <div className="col-md-6 offset-md-3">
      <div className="card card-body">
        <h4>Create note</h4>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="title"
            name="title"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <textarea
            name="content"
            className="form-control"
            placeholder="content"
            required
            onChange={handleInputChange}
          />
        </div>
        <DatePicker
          className="form-control"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />

        <form onSubmit={handleSubmit}>
          <select
            className="form-control"
            name="userSelected"
            onChange={handleInputChange}
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
