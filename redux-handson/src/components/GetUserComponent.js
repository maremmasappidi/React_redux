// src/components/GetUserComponent.js
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../actions/userActions";

const GetUserComponent = ({ users, error, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div>
      <h2>Get Users</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
  error: state.error,
});

export default connect(mapStateToProps, { getUsers })(GetUserComponent);
