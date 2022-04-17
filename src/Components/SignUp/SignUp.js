import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  let showError;

  const [createUserWithEmailAndPassword, user, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const handleEmailAtBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordAtBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordAtBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  if (user) {
    navigate("/home");
  }

  if (error) {
    return (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      toast("Password Did not match");
      return;
    }
    if (password.length < 6) {
      toast("Password length must be more than 6");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <h2 className="text-primary text-center my-5 fs-2 fw-bolder">Register</h2>
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
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            onBlur={handleConfirmPasswordAtBlur}
            type="password"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>

        {showError}
        <Button variant="primary" type="submit">
          Register
        </Button>
        <p>
          Already Registered? <span> </span>
          <span>
            <Link
              className="fw-bolder text-decoration-none text-success"
              to="/login"
            >
              Click To Login
            </Link>
          </span>
        </p>
        <SocialLogin></SocialLogin>
        <ToastContainer />
      </Form>
    </div>
  );
};

export default SignUp;
