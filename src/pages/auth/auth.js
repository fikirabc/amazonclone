// @ts-ignore
import Classes from "./signup.module.css";
import { Link } from "react-router-dom";

function auth() {
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
            <lable htmlFor="email">Email</lable>
            <input type="email" id="email" placeholder="sample@amazon.com"/>
          </div>
          <div>
            <lable htmlFor="password">Password</lable>
            <input type="Password" id="password" />
          </div>
          <button className={Classes.login_signInButton}>Sign In</button>
        </form>

        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy.
        </p>
        <button className={Classes.login_registrationButton}>Create your Amazon Account</button>
      </div>
    </section>
  );
}

export default auth;
