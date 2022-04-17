import React from "react";
import { Button } from "react-bootstrap";
import google from "../../Images/social/google.png";

const SocialLogin = () => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <div className="bg-info w-50" style={{ height: "1px" }}></div>
        <p className="mt-2 px-2">or</p>
        <div className="bg-info w-50" style={{ height: "1px" }}></div>
      </div>
      <div>
        <Button
          className="d-block mx-auto mb-5"
          variant="primary"
          size="lg"
          active
        >
          <img src={google} alt="" /> <span> Sign Up With Google </span>
        </Button>{" "}
      </div>
    </div>
  );
};

export default SocialLogin;
