import React from "react";

const Blogs = () => {
  return (
    <div className="text-center">
      <div>
        <h2>Q: Difference between authorization and authentication</h2>
        <p>
          Ans:Authentication can be define as to Check the person's identity to
          grant access to the system.And authorization is Checks the person's
          privileges or permissions to access the resources.Authentication is
          performed at the very first step.On the other hand Authorization is
          usually performed after authentication.For example, Authentication is
          In the online banking applications, the identity of the person is
          first determined with the help of the user ID and password.And
          authorization In a multi-user system, the administrator decides what
          privileges or access rights do each user have.
        </p>
      </div>
      <div>
        <h2>
          Q: Why are you using firebase? What other options do you have to
          implement authentication?
        </h2>
        <p>
          Ans:Firebase is a NoSQL database that is used for mobile and web apps,
          provided by Google.Other option of implement authentication are:
          Authentication application,PIV or CAC for federal government employees
          and military,Security key,ext message / Phone call etc.
        </p>
      </div>
      <div>
        <h2>
          Q:What other services does firebase provide other than authentication
        </h2>
        <p>
          Ans: Firebase Hosting works out-of-the-box with Firebase services,
          including Cloud Functions, Authentication, Realtime Database, Cloud
          Firestore, and Cloud Messaging. You can build powerful microservices
          and web apps using these complementary Firebase services.Services
          covered include Firebase A/B Testing, Firebase App Check, Firebase App
          Distribution, Firebase Cloud Messaging, Firebase Crashlytics etc
        </p>
      </div>
    </div>
  );
};

export default Blogs;
