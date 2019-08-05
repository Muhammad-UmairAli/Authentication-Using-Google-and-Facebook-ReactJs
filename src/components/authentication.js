import React, { Component } from 'react';

import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

class App extends Component {
  render() {
    const responseFacebook = response => {
      console.log(response);
    };

    const responseGoogle = response => {
      console.log(response);
    };

    return (
      <div className="App">
        <h1>
          <b>
            <i>
              LOGIN WITH <br />
              FACEBOOK & GOOGLE
            </i>
          </b>
        </h1>

        <FacebookLogin
          appId="" // GET YOUR APP ID FROM FACEBOOK DEVELOPER
          fields="name,email,picture"
          callback={responseFacebook}
        />
        <br />
        <br />
        <br />
        <GoogleLogin
          clientId="" //GET YOUR CLIENTID FROM GOOGLE API
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
        <br />
        <br />
      </div>
    );
  }
}

export default App;
