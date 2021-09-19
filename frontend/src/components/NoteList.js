// const url = 'http://localhost/api/user';
import React, { useState, useEffect } from "react";

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
  return (
    <>
      <div className="row">
        {data.map((note) => (
          <div className="col-md-4 p-2">
            <div className="card">
              <div className="card-header">
                <h5>{note.title}</h5>
              </div>
              <div className="card-body">
                <p>{note.content}</p>
                <h6>{note.author}</h6>
                <span>{timeago.format(note.date)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NoteList;
