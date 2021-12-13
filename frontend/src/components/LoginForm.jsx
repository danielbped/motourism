import React, { useState } from 'react';
import User from '../assets/User.png';
import Password from '../assets/Password.png';
import motourismAPI from '../services/motourismAPI';

const LoginForm = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleLoginInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full p-2 m-5">
      <h1 className="text-center text-3xl">Login</h1>
      <form className="flex flex-col items-center justify-center w-full p-2">
        <label
          className="flex items-center justify-center m-4 border-2 border-gray-400 rounded-lg"
          htmlFor="email"
        >
          <img width="30" className="m-2" src={User} alt="User icon" />
          <input
            name="email"
            style={{ background: 'none' }}
            id="email"
            type="email"
            placeholder="E-mail"
            onChange={handleLoginInputChange}
          />
        </label>
        <label
          htmlFor="password"
          className="flex items-center justify-center m-4 border-2 border-gray-400 rounded-lg"
        >
          <img width="30" src={Password} className="m-2" alt="Password icon" />
          <input
            name="password"
            style={{ background: 'none' }}
            id="password"
            type="password"
            placeholder="Senha"
            onChange={handleLoginInputChange}
          />
        </label>
        <button
          style={{ backgroundColor: '#C18C5D' }}
          className="bg-yellow-500 font-bold py-2 px-8 rounded text-lg m-4 font-bold"
          type="button"
          onClick={() => motourismAPI.login(user)}
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
