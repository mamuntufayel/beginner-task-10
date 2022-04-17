import React from "react";
import { Button } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import google from "../../Images/social/google.png";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let showError;

  if (user) {
    navigate("/home");
  }

  if (error) {
    showError = (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div className="bg-info w-50" style={{ height: "1px" }}></div>
        <p className="mt-2 px-2">or</p>
        <div className="bg-info w-50" style={{ height: "1px" }}></div>
      </div>
      {showError}
      <div>
        <Button
          onClick={() => signInWithGoogle()}
          className="d-block mx-auto mb-5"
          variant="primary"
          size="lg"
          active
        >
          <img src={google} alt="" /> <span> Sign Up With Google </span>
        </Button>
      </div>
    </div>
  );
};

export default SocialLogin;
