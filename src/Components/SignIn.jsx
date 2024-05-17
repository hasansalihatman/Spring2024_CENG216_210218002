import GoogleButton from "react-google-button";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const style = {
  wrapper: `flex justify-center`,
};

const SignIn = () => {
  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };
  return (
    <div className={style.wrapper}>
       <GoogleButton onClick={googleSignIn} style={{borderRadius: '10px'}}/>
    </div>
  );
};

export default SignIn;
