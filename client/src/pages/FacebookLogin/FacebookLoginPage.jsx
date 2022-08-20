import React, { useState, useEffect } from "react";
import LoadingComponent from "../../components/Loading/LoadingComponent";
import FaceBookLogo from "../../assets/img/Beautiful-Facebook-logo-icon-social-media-png.png";
import {signInWithPopup, FacebookAuthProvider} from 'firebase/auth'
import { authentication } from '../../config/firebase-config'

export default function FacebookLoginPage(props) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  const signInFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(authentication, provider).then((res) => {
      localStorage.setItem('NAME_FACEBOOK', JSON.stringify(res._tokenResponse.displayName));
      localStorage.setItem('LINK_FACEBOOK', JSON.stringify(res._tokenResponse.federatedId));
      console.log(res)
      window.location.href = props.url;
    })
    .catch((err) => {
      console.log(err.message)
    })
    
  }

  return (
    <>
      {!loading ? (
        <LoadingComponent />
      ) : (
        <div
          className="h-screen w-full flex items-center justify-center text-center bg-cover bg-center"
          style={{
            backgroundColor: "#14286E",
          }}
        >
          <div className="row">
            <div className="col-6">
              <img src={FaceBookLogo} width={400} alt="facelogo" />
              <button onClick={signInFacebook} className="w-full flex items-center justify-center px-8 py-3 border border-transparent leading-6 font-regular rounded-md text-white text-xl bg-indigo-800 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:px-10">
                Facebook Login
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
