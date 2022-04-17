import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const handleEmailAtBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordAtBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordAtBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password Did not match");
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
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
      </Form>
    </div>
  );
};

export default SignUp;
