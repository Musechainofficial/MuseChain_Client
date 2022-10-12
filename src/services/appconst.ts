const AppConsts = {
    authorization: {
      encrptedAuthTokenName: 'enc_auth_token',
    },
    appBaseUrl: "https://musechain-api.herokuapp.com/api/", // process.env.REACT_APP_APP_BASE_URL,
    // appBaseUrl: "http://192.168.101.21:3000/api", // process.env.REACT_APP_APP_BASE_URL,
    remoteServiceBaseUrl: process.env.REACT_APP_REMOTE_SERVICE_BASE_URL,
    iOSAppUrl: process.env.IOS_APP_URL,
    androidAppUrl: process.env.ANDROID_APP_URL,
  };
  export default AppConsts;
