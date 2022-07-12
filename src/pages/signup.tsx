import React, { FC, useEffect } from "react";
import { signup } from "../store/api";
import { useNavigate } from 'react-router-dom';

export const Signup: FC = () => {
  const navigate = useNavigate();

  const signupSubmit = (e: any) => {
    e.preventDefault();
    signup({ name: e.target.elements.name.value, email: e.target.elements.email.value, password: e.target.elements.password.value }).then(res => {
      if (res.status = 200) {
        navigate('/')
      }
    });
  }
  return (
    <div>
      <form onSubmit={signupSubmit}>
        <input type='text' name="name" placeholder="name" />
        <input type='text' name="email" placeholder="Eamil" />
        <input type='password' name="password" placeholder="Password" />
        <button>Submit</button>
      </form>
    </div>
  );
};
