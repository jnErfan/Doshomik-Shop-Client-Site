import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useEffect, useState } from "react";
import FirebaseInitialize from "../Firebase/FirebaseInitialize";
import Swal from "sweetalert2";

//  Call FirebaseInitialized
FirebaseInitialize();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const useFirebase = () => {
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const auth = getAuth();

  //  Email And Password Create Account And Image Name Info
  const emailPasswordSignUp = (email, password, name, navigate, location) => {
    setIsLoading(true);
    setError("");
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result?.user);
        savedUserInfo(name, email, "POST");
        Swal.fire({
          icon: "success",
          title: "Great!",
          text: "SignUp Successful",

          padding: "3em",
          showConfirmButton: false,
          timer: 3000,
        });
        const redirect = location?.state?.from || "/";
        navigate(redirect);
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Something Went Wrong",
          text: error.message,

          padding: "3em",
          showConfirmButton: false,
          timer: 3000,
        });
      })
      .finally(() => setIsLoading(false));
  };
  // Login Email And Password And Redirect
  const emailPasswordLogin = (email, password, navigate, location) => {
    setError("");
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const redirect = location?.state?.from || "/";
        setUser(result?.user);
        Swal.fire({
          icon: "success",
          title: "Welcome Back",
          text: "Login Successful",

          padding: "3em",
          showConfirmButton: false,
          timer: 3000,
        });
        navigate(redirect);
      })
      .catch((error) => {
        setError(error.message);
        Swal.fire({
          icon: "error",
          title: "Something Went Wrong",
          text: error.message,

          padding: "3em",
          showConfirmButton: false,
          timer: 3000,
        });
      })
      .finally(() => setIsLoading(false));
  };

  // Reset Login Email Password User
  const resetPassword = (email) => {
    setError("");

    sendPasswordResetEmail(auth, email)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Password Reset Email Send",
          text: "Please Check Email",

          padding: "3em",
          showConfirmButton: false,
          timer: 3000,
        });
      })
      .catch((error) => {
        setError(error.message);
        Swal.fire({
          icon: "error",
          title: "Something Went Wrong",
          text: "Please Try Again",

          padding: "3em",
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };

  //  Google Sign In
  const googleSignIn = (navigate, location) => {
    setError("");
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result?.user);
        Swal.fire({
          icon: "success",
          title: "Welcome",
          text: "Sign In Successful",

          padding: "3em",
          showConfirmButton: false,
          timer: 3000,
        });
        savedUserInfo(result?.user?.displayName, result?.user?.email, "PUT");
        const redirect = location?.state?.from || "/";
        navigate(redirect);
      })
      .catch((error) => {
        setError(error.message);
        Swal.fire({
          icon: "error",
          title: "Something Wrong",
          text: error.message,

          padding: "3em",
          showConfirmButton: false,
          timer: 3000,
        });
      })
      .finally(() => setIsLoading(false));
  };
  //  Github Sign In
  const githubSignIn = (navigate, location) => {
    setError("");
    setIsLoading(true);
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        setUser(result?.user);
        Swal.fire({
          icon: "success",
          title: "Welcome",
          text: "Sign In Successful",

          padding: "3em",
          showConfirmButton: false,
          timer: 3000,
        });
        savedUserInfo(result.user?.displayName, result.user?.email, "PUT");
        const redirect = location?.state?.from || "/";
        navigate(redirect);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Something Wrong",
          text: error.message,

          padding: "3em",
          showConfirmButton: false,
          timer: 3000,
        });
      })
      .finally(() => setIsLoading(false));
  };
  // Facebook Sign In
  const facebookSignIn = (navigate, location) => {
    setError("");
    setIsLoading(true);
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        setUser(result?.user);
        Swal.fire({
          icon: "success",
          title: "Welcome",
          text: "Sign In Successful",

          padding: "3em",
          showConfirmButton: false,
          timer: 3000,
        });
        savedUserInfo(result.user?.displayName, result.user?.email, "PUT");
        const redirect = location?.state?.from || "/";
        navigate(redirect);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Something Wrong",
          text: error.message,

          padding: "3em",
          showConfirmButton: false,
          timer: 3000,
        });
      })
      .finally(() => setIsLoading(false));
  };

  // Log Out All
  const logOutAll = () => {
    Swal.fire({
      title: "Are You Sure?",
      text: "You Won't LogOut",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "LogOut",
      cancelButtonText: "Stay Logged",
    }).then((result) => {
      if (result.isConfirmed) {
        signOut(auth)
          .then(() => {
            setUser("");
            Swal.fire({
              icon: "success",
              title: "LogOut Success",
              text: "I Hope You'll Come Back",

              padding: "3em",
              showConfirmButton: false,
              timer: 3000,
            });
          })
          .catch((error) => {
            setError(error.message);
          })
          .finally(() => setIsLoading(false));
      }
    });
  };

  const savedUserInfo = (name, email, method) => {
    const date = new Date();
    const userDetails = { name, email, date };
    fetch("https://doshomik-shop-server.herokuapp.com/users", {
      method: method,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userDetails),
    });
  };

  // OnStateChange User Login Saved
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
      setIsLoading(false);
    });
  }, [auth]);

  return {
    user,
    setError,
    emailPasswordSignUp,
    emailPasswordLogin,
    facebookSignIn,
    googleSignIn,
    githubSignIn,
    resetPassword,
    logOutAll,
    isLoading,
    error,
  };
};

export default useFirebase;
