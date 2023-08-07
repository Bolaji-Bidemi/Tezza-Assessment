import React from "react";
import "./Profile.css";

const Profile = ({ image, name, email, gender, age, country }) => {
  return (
    <div className="profile">
      <h4>Client Picture</h4>
      <div className="details3">
        <img src={image} alt="profile" className="picture" />
        <div className="details1">
          <h3 className="name">{name}</h3>
          {email}
          <div className="details2">
            {gender} {age} {country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
