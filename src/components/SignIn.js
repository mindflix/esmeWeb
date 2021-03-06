import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import * as ROUTES from '../constants/routes';
import { authService } from '../services';

const SignIn = () => <SignInForm />;

const SignInForm = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  let isInvalid = password === '' || email === '';

  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();

    authService
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        setEmail('');
        setPassword('');
        setError(null);
        history.push(ROUTES.HOME);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const onChange = (handler, event) => {
    handler(event.target.value);
  };

  return (
    <section className="h-screen bg-gray-200">
      <div className="flex justify-center h-full items-center my-10 sm:my-0">
        <div className=" container max-w-xs">
          <form
            onSubmit={onSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-bold mb-2">
                Email
              </label>
              <input
                name="email"
                value={email}
                onChange={(event) => onChange(setEmail, event)}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-600 text-sm font-bold mb-2">
                Mot de passe
              </label>
              <input
                name="password"
                value={password}
                onChange={(event) => onChange(setPassword, event)}
                className="shadow appearance-none border border rounded w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
              {error && (
                <p className="text-red-500 text-xs italic">{error.message}</p>
              )}
            </div>
            <div className="flex items-center justify-between">
              <button
                disabled={isInvalid}
                className="transition ease-in-out duration-300 nav-links bg-teal-400 hover:bg-gray-300 text-blue-800 font-bold py-2 px-6 rounded focus:outline-none"
                type="submit"
              >
                Connection
              </button>
              <a
                className="flex px-4 align-baseline font-thin text-sm text-blue-800 hover:text-blue-700"
                href="http://sudrihack.com"
              >
                Mot de passe oublié ?
              </a>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2020 Sudrihack Corp. Tous droits réservés.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignIn;

export { SignInForm };
