import React, { useState } from "react";
import { connect } from "react-redux";
import { addUser } from "../actions/userActions";

const AddUserComponent = ({ addUser, users, error }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  const handleAddUser = () => {
    addUser(userData);
  };

  return (
    <div>
      <h2>Add User</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        <div>
          Email:
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
        </div>
      </label>

      <button onClick={handleAddUser}>Add User</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
  error: state.error,
});

export default connect(mapStateToProps, { addUser })(AddUserComponent);
