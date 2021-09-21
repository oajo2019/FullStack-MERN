// const url = 'http://localhost/api/user';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import * as timeago from "timeago.js";

// second argument

const NoteList = () => {
  const url = "http://localhost:4000/api/notes/";
  const [data, setData] = useState([]);
  const getUsers = async () => {
    const res = await Axios.get(url);
    const data = await res.data;
    setData(data);
    console.log(data);
  };
  useEffect(() => {
    getUsers();
  }, [setData]);
  const deleteNote = async (id) => {
    // console.log(id);
    await Axios.delete(url + id);
    getUsers();
  };
  return (
    <>
      <div className="row">
        {data.map((note) => (
          <div className="col-md-4 p-2" key={note._id}>
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <h5>{note.title}</h5>
                <Link className="btn btn-secondary" to={"/edit/" + note._id}>
                  Editar
                </Link>
              </div>
              <div className="card-body">
                <p>{note.content}</p>
                <h6>{note.author}</h6>
                <span>{timeago.format(note.date)}</span>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-danger"
                  onClick={() => deleteNote(note._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NoteList;
