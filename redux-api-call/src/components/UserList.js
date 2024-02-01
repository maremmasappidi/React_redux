import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../slices/userSlice";
import "bootstrap/dist/css/bootstrap.min.css";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.data);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="container">
      <h2 className="mb">User Details</h2>
      {error && <p className="text-danger">{error}</p>}
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list">
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
