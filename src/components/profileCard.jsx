import React from "react";

const ProfileCard = (props) => {
  return (
    <div className="w-1/4 mx-auto bg-secondary text-center">
      <div className="m-2 bg-gray-200 h-64">
        <img alt="image" src={props.headshot} />
      </div>
      <p className="text-xl font-medium">{props.name}</p>
      <p className="text-md font-light p-3">"{props.quote}"</p>
    </div>
  );
};

export default ProfileCard;
