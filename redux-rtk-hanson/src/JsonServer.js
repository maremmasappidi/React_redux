import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
function JsonServer() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3031/posts")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container mt-5">
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default JsonServer;
