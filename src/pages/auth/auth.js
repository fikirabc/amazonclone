// @ts-ignore
import Classes from "./signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../utillity/firebase";
import { useState, useContext } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../component/dataProvider/dataProvider";
import { Type } from "../../utillity/action.type";
// import { FadeLoader } from "@salmonco/react-loader-spinner";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const { loading, setLoading } = useState({
  //   signin: false,
  //   signup: false,
  // });

  // @ts-ignore
  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();

  console.log(user);

  const authHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.name);
    if (e.target.name == "signin") {
      // setLoading({ ...loading, signin: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
           navigate("/")
         
        })
        .catch((err) => {
          setError(err.message);
         
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // setLoading({ ...loading, signup: true });
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
           navigate("/")
          // setLoading({ ...loading, signup: false });
        })
        .catch((err) => {
          setError(err.message);
          // setLoading({ ...loading, signup: false });
        });
    }
  };

  return (
    <section className={Classes.login}>
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className={Classes.login_container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="sample@amazon.com"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="Password"
              id="password"
            />
          </div>
          <button
            type="submit"
            onClick={authHandler}
            name="signin"
            className={Classes.login_signInButton}
          >
            {/* {loading.signin ? <FadeLoader></FadeLoader> : " Sign In"} */}
            SignIn
          </button>
        </form>

        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy.
        </p>
        <button
          type="submit"
          onClick={authHandler}
          name="signup"
          className={Classes.login_registrationButton}
        >
          Create your Amazon Account
        </button>
        {error && (
          <small style={{ paddingTop: "10px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;
