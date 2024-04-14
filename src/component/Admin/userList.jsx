import axios from 'axios';
import React, { useEffect, useState } from 'react';

const getAllUsers = async () => {
  try {
    console.log('Calling getAllUsers API...');
    const response = await axios.get('http://localhost:8081/auth/getAllUsers');
    console.log('API response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
    console.log(getAllUsers);
  }
};

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        console.log('Fetching users...');
        const usersData = await getAllUsers();
        console.log('Users data:', usersData);
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
        jjhjkkdfk
      <h1>List of Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>ID: {user.id}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;