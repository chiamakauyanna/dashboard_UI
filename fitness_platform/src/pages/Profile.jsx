import React from "react";
import UserDetails from "../components/profile/UserDetails";
import SubscribeNewsletter from "../components/profile/SubscribeNewsletter";
import AccountDetails from "../components/profile/AccountDetails";
import WeightTracking from "../components/profile/WeightTracking";
import Settings from "../components/profile/Settings";
import MusicProvider from "../components/profile/MusicProvider";
import FitnessStar from "../components/profile/FitnessStar";

const Profile = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {/* left section */}
      <div className="">
        <UserDetails />
        <SubscribeNewsletter />
      </div>
      {/* second section */}
      <div className="">
        <AccountDetails />
        <WeightTracking />
      </div>
      {/* last section */}
      <div className="">
        <Settings />
        <MusicProvider />
        <FitnessStar />
      </div>
    </div>
  );
};

export default Profile;
