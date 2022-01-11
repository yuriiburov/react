import React from 'react';
import moment from 'moment';

const Profile = ({ userData }) => {
  const { firstName, lastName, birthDate, birthPlace } = userData;
  const date = moment(new Date(birthDate)).format('DD MMM YY');
  return (
    <>
      <div className="profile__name">{`${firstName} ${lastName} `}</div>
      <div className="profile__birth">{`Was born ${date} in ${birthPlace}`}</div>
    </>
  );
};

export default Profile;
