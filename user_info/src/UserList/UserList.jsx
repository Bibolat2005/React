import React, { useEffect, useState } from 'react';
import UserCard from '../UserCard/UserCard';
import './UserList.css';

function UserList() {  // Убрали searchQuery из пропсов
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://randomuser.me/api/?results=6');
        
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        
        const data = await response.json();
        setUsers(data.results);
      } catch (err) {
        setError('Failed to load users');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <p>❌ {error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="user-list">
      <h2>Found {users.length} users</h2>
      <div className="users-grid">
        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
}

export default UserList;