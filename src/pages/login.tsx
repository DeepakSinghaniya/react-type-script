import { FC } from "react";
import { signIn } from '../store/api';

export const Login: FC = () => {
  const signInSubmit = (e: any) => {
    e.preventDefault();
    signIn({ email: e.target.elements.email.value, password: e.target.elements.password.value }).then(res => {
      if (res.status === 200) {
        console.log(res?.data);
        localStorage.setItem('token', res?.data?.accessToken);
        localStorage.setItem('userId', res?.data?.id);
        localStorage.setItem('name', res?.data?.name);
        localStorage.setItem('eamil', res?.data?.email);
      }
    });
  }
  return (
    <div>
      <form onSubmit={signInSubmit}>
        <input type='text' name="email" placeholder="email" />
        <input type='text' name="password" placeholder="password" />
        <button>Submit</button>
      </form>
    </div>
  );
};
