import React from 'react';
import moment from 'moment';
import './index.css';

const Profile = ({ userData }) => {
  const { firstName, lastName, birthDate, birthPlace } = userData;
  const date = moment(new Date(birthDate)).format('DD MMM YY');
  return (
    <div className="profile">
      <div className="profile__name">{`${firstName} ${lastName} `}</div>
      <div className="profile__birth">{`Was born ${date} in ${birthPlace}`}</div>
    </div>
  );
};

export default Profile;
