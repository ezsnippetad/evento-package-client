import React, { useState, useEffect } from "react";
import PersonalProfile from "./PersonalProfile";
import BusinessProfile from "./BusinessProfile";
import { useDispatch } from "react-redux";
import { useProfileDetails, getProfileDetails } from "./profileSlice";
import { MoonLoader } from "react-spinners";
import EventoPackageLoader from "../../Common/Loader/EventoPackageLoader";

const Profile = () => {
  const profileDetails = useProfileDetails();
  console.log('profileDetails', profileDetails)
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [getProfileDetails, setGetProfileDetails] = useState({})

  const getProfile = async () => {
    try {
      const getProfile = await dispatch(getProfileDetails()).unwrap();
      console.log('getProfile', getProfile)
      setGetProfileDetails(getProfile)
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="wrapper min-h-full flex flex-col">
      <div className="space-y-8 h-full">
        {/* <!-- advisement --> */}
        {/* <!-- profile 1 --> */}
        {loading ? (
          <EventoPackageLoader />
        ) : (
          <>
            <PersonalProfile details={profileDetails} getProfile={getProfile} />
            {/* <Advertisement /> */}

            {/* <!-- profile 2 --> */}
            <BusinessProfile
              business={profileDetails?.businessProfile}
              getProfile={getProfileDetails}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
