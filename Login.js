import React from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';

const Login = () => {
  const responseGoogle = (response) => {
    axios.post('http://localhost:3000/auth/google', { token: response.tokenId })
      .then(res => {
        console.log(res.data);
        // Save user data or token
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <GoogleLogin
        clientId="275183324062-h3iaibe3bkedfmb16vak5btkul81dib8.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        redirectUri="http://localhost:3000/auth/google/callback"
      />
    </div>
  );
};

export default Login;
