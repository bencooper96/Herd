import React from "react";

const ProfileCard = (props) => {
  return (
    <div className="sm:w-1/4 mx-auto bg-secondary text-center">
      <div className="m-2 bg-gray-200 h-64">
        <img alt="image" src={props.headshot} />
      </div>
      <p className="text-xl font-medium">{props.name}</p>
      <p className="text-md font-light p-3">"{props.quote}"</p>
    </div>
  );
};

const ProfileCardMobile = (props) => {
  return (
    <div className="mx-auto text-center bg-primary">
      <div className="m-2 h-64 pt-2">
        <img alt="image" className=" mx-auto" src={props.headshot} />
      </div>
      <p className="text-xl font-medium">{props.name}</p>
      <p className="text-md font-regular p-3">"{props.quote}"</p>
    </div>
  );
};

export { ProfileCard, ProfileCardMobile };
