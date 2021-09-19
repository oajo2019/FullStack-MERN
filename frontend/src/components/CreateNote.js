import React, { useState, useEffect } from "react";
import Axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function CreateNote() {
  const url = "http://localhost:4000/api/users/";
  const url1 = "http://localhost:4000/api/notes/";
  const [users, setUser] = useState([]);
  const [userSelected, setUserSelected] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const getUsers = async () => {
    const res = await Axios.get(url);
    const data = await res.data;
    setUser(data);
    setUserSelected(data[0].username); //iniciliza usuario por defecto
  };
  //  se llama los datos al montar el componente
  useEffect(() => {
    getUsers();
  }, [setUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newNote = {
      title: title,
      content: content,
      date: startDate,
      author: userSelected,
    };
    const res = await Axios.post(url1, newNote);
    console.log(res);
    setTitle("");
    setContent(""); //limpia el formulario
  };
  const handleInputChange = (e) => {
    e.preventDefault();
    // console.log(e.target.value, e.target.name);
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "content") {
      setContent(e.target.value);
    } else if (e.target.name === "userSelected") {
      if (e.target.value === null) {
      }
      setUserSelected(e.target.value);
      setStartDate();
    }
    console.log(e.target.value);
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
          <DatePicker
            className="form-control"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateNote;
