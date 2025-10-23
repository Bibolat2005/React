import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserCard.css';

function UserCard({ user }) {
  const navigate = useNavigate();

  const handleShowMore = () => {
    // Сохраняем данные пользователя в sessionStorage для передачи на детальную страницу
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    navigate(`/user/${user.login.uuid}`);
  };

  return (
    <div className="user-card">
      <div className="user-header">
        <img 
          src={user.picture.large} 
          alt={`${user.name.first} ${user.name.last}`}
          className="user-avatar"
        />
        <h3>{user.name.first} {user.name.last}</h3>
        <p className="user-email">{user.email}</p>
      </div>
      
      <div className="user-info">
        <p className="user-location">
          📍 {user.location.city}, {user.location.country}
        </p>
        <p>🎂 Age: {user.dob.age}</p>
        <p>📞 {user.phone}</p>
        <p>📅 Registered: {new Date(user.registered.date).toLocaleDateString()}</p>
      </div>

      <button className="show-more-btn" onClick={handleShowMore}>
        👁️ Show Details
      </button>
    </div>
  );
}

export default UserCard;