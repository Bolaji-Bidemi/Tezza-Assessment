import React from "react";
import Header from "../../components/header/Header";
import "./clientProfile.css";
import Profile from "../../components/profile/Profile";
import {
  profile,
  profileDetails,
  moreProfileDetails,
  moreProfileDetails2,
} from "../../data";
import MoreDetails from "../../components/moreDetail/MoreDetails";

const ClientProfile = () => {
  return (
    <section>
      <div className="title">
        <Header title="Client Profile" subtitle="View Client profile here" />
      </div>

      <div className="profileContain">
        {profile.map((item, index) => (
          <Profile
            name={item.name}
            email={item.email}
            gender={item.gender}
            key={index}
            age={item.age}
            country={item.country}
            image={item.image}
          />
        ))}

        <div className="profileContent">
          <div className="det">
            {profileDetails.map((item, index) => (
              <MoreDetails tag={item.tag} value={item.value} key={index} />
            ))}
          </div>
          <div className="det">
            {moreProfileDetails2.map((item, index) => (
              <MoreDetails tag={item.tag} value={item.value} key={index} />
            ))}
          </div>

          <div className="det">
            {moreProfileDetails.map((item, index) => (
              <MoreDetails tag={item.tag} value={item.value} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientProfile;
