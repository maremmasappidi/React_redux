import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../slices/userSlice";
import "bootstrap/dist/css/bootstrap.min.css";
const AddUser = () => {
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const handleAddUser = () => {
    dispatch(addUser(newUser));
    setNewUser({
      name: "",
      username: "",
      email: "",
    });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Add user details</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={newUser.username}
            onChange={(e) =>
              setNewUser({ ...newUser, username: e.target.value })
            }
          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAddUser}
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
