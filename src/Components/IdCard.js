import React from 'react';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="indiv-container">
      <div className="img-container">
        <img src={picture} alt="{firstName}" />
      </div>
      <div className="text-container">
        <p><b>First Name:</b> {firstName}</p>
        <p><b>Last Name:</b> {lastName}</p>
        <p><b>Gender:</b> {gender}</p>
        <p><b>Height:</b> {height}</p>
        <p><b>Birth:</b> {birth}</p>
      </div>
    </div>
  );
};

export default IdCard;
