import React from "react";
import ProfileCard from "./components/example/ex2/ProfileCard";

const App = () => {
  const isLoggedIn = true;
  return (
    <>
      {isLoggedIn && (
        <ProfileCard
          bgImg="https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          uImg="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          uname="조경은"
          instaId="kyoungeunjjo"
          onFollow={() => {
            alert("팔로우 완료");
          }}
        />
      )}
    </>
  );
};

export default App;
