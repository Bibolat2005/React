import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './UserDetail.css';

function UserDetail() {
  const navigate = useNavigate();
  const { userId } = useParams();
  
  // Получаем данные пользователя из sessionStorage
  const userData = sessionStorage.getItem('currentUser');
  const user = userData ? JSON.parse(userData) : null;

  const handleBack = () => {
    navigate('/');
  };

  if (!user) {
    return (
      <div className="user-detail-error">
        <h2>User not found</h2>
        <button onClick={handleBack} className="back-btn">
          ← Back to Users
        </button>
      </div>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="user-detail">
      <button onClick={handleBack} className="back-btn">
        ← Back to Users List
      </button>

      <div className="user-detail-card">
        <div className="user-detail-header">
          <img 
            src={user.picture.large} 
            alt={`${user.name.first} ${user.name.last}`}
            className="user-detail-avatar"
          />
          <div className="user-detail-title">
            <h1>{user.name.title} {user.name.first} {user.name.last}</h1>
            <p className="user-detail-username">@{user.login.username}</p>
          </div>
        </div>

        <div className="user-detail-grid">
          {/* Personal Information */}
          <div className="detail-section">
            <h2>👤 Personal Information</h2>
            <div className="detail-row">
              <span className="detail-label">Gender:</span>
              <span className="detail-value">{user.gender}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Date of Birth:</span>
              <span className="detail-value">
                {formatDate(user.dob.date)} (Age: {user.dob.age})
              </span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Nationality:</span>
              <span className="detail-value">{user.nat}</span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="detail-section">
            <h2>📞 Contact Information</h2>
            <div className="detail-row">
              <span className="detail-label">Email:</span>
              <span className="detail-value">{user.email}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Phone:</span>
              <span className="detail-value">{user.phone}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Cell:</span>
              <span className="detail-value">{user.cell}</span>
            </div>
          </div>

          {/* Location Information */}
          <div className="detail-section">
            <h2>📍 Location</h2>
            <div className="detail-row">
              <span className="detail-label">Street:</span>
              <span className="detail-value">
                {user.location.street.number} {user.location.street.name}
              </span>
            </div>
            <div className="detail-row">
              <span className="detail-label">City:</span>
              <span className="detail-value">{user.location.city}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">State:</span>
              <span className="detail-value">{user.location.state}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Country:</span>
              <span className="detail-value">{user.location.country}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Postcode:</span>
              <span className="detail-value">{user.location.postcode}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Timezone:</span>
              <span className="detail-value">
                {user.location.timezone.offset} - {user.location.timezone.description}
              </span>
            </div>
          </div>

          {/* Account Information */}
          <div className="detail-section">
            <h2>🔐 Account Information</h2>
            <div className="detail-row">
              <span className="detail-label">Username:</span>
              <span className="detail-value">{user.login.username}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">UUID:</span>
              <span className="detail-value uuid">{user.login.uuid}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Registered:</span>
              <span className="detail-value">
                {formatDate(user.registered.date)} ({user.registered.age} years ago)
              </span>
            </div>
          </div>

          {/* Identification */}
          <div className="detail-section">
            <h2>🆔 Identification</h2>
            <div className="detail-row">
              <span className="detail-label">ID Name:</span>
              <span className="detail-value">{user.id?.name || 'N/A'}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">ID Value:</span>
              <span className="detail-value">{user.id?.value || 'N/A'}</span>
            </div>
          </div>
        </div>

        <div className="user-detail-footer">
          <p className="user-id">User ID: {user.login.uuid}</p>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;