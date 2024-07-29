import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, []);

  return (
    <>
      <h1>About</h1>
      <div>location.pathname using useLocation: {location.pathname}</div>
    </>
  );
};

export default About;
