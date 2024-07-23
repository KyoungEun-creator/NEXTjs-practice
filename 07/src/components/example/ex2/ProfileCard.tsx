import React from "react";

type TProfileCardProps = {
  bgImg: string;
  uImg: string;
  uname: string;
  instaId: string;
  onFollow: () => void;
};

const ProfileCard = ({ bgImg, uImg, uname, instaId, onFollow }: TProfileCardProps) => {
  return (
    <article className="card">
      <div>
        <img className="card-img" src={bgImg} alt="background-pic" />
      </div>
      <div className="profile">
        <img className="prof-img" src={uImg} alt="profile-pic" />
        <h3 className="alias">{uname}</h3>
        <p className="username">@{instaId}</p>
        <button type="submit" onClick={onFollow}>
          Follow
        </button>
      </div>
    </article>
  );
};

export default ProfileCard;
