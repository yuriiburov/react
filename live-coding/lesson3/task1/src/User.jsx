import React from 'react';

// input: string(name), number(age)
// output: jsx

const User = ({ name, age, id }) => {
  return (
    <li key={id} className="user">
      <span className="user__name">{name}</span>
      <span className="user__age">{age}</span>
    </li>
  );
};

export default User;