import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";

const HomePage = ({ history }) => {
  return (
    <div className="homepage">
      <Directory />
      {console.log(history)}
    </div>
  );
};

export default HomePage;
