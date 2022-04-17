import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let showError;

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const handleToResetPassword = async () => {
    await sendPasswordResetEmail(email);
    toast("Sent email");
  };

  const handleEmailAtBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordAtBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate(from, { replace: true });
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
      <h2 className="text-primary text-center my-5 fs-2 fw-bolder">Login</h2>
      <Form onSubmit={handleOnSubmit} className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            onBlur={handleEmailAtBlur}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            onBlur={handlePasswordAtBlur}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        {showError}
        <Button
          className="w-25 mx-auto d-block"
          variant="primary"
          type="submit"
        >
          Login
        </Button>
        <p>
          Don't have an account? <span> </span>
          <span>
            <Link
              className="fw-bolder text-decoration-none text-success"
              to="/signup"
            >
              Click To Register
            </Link>
          </span>
        </p>
        <p>
          Forget Password? <span> </span>
          <span>
            <Button
              onClick={handleToResetPassword}
              className="fw-bolder text-decoration-none text-success"
              variant="link"
            >
              Reset Password
            </Button>
          </span>
        </p>
        <SocialLogin></SocialLogin>
        <ToastContainer></ToastContainer>
      </Form>
    </div>
  );
};

export default Login;
