import React, {useState, useEffect} from 'react'
import axios from 'axios';
const url = 'http://localhost/api/user';
function NoteList() {
    const res = await axios.get(url);
    console.log(res);
        const { loading, products } = useFetch(url)
  console.log(products)
  return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>
    </div>
  )
}

export default NoteList;






// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN


