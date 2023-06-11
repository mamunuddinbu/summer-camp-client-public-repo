import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import useTitle from "../../hooks/useTitle";
import { GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";
import useToken from "../../hooks/useToken";

const Login = () => {
  useTitle('Login')
  const { signIn, user, googleLoginProvider } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
  const [error, setError] = useState('');
  const [loginEmail, setLoginEmail] =useState('')
  const [token] = useToken(loginEmail);

 if(token){
  navigate(from, { replace: true });

 }

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginEmail(user.email)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Logged In Successfully',
            showConfirmButton: false,
            timer: 1500
          })
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  //////////////////////////////////

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    googleLoginProvider(googleProvider)
      .then((result) => {
        const user = result.user;
        const {displayName, photoURL, email} = user;
        console.log(user);
  
        const createdUser = {
          name: displayName,
          email:email,
          role: "student",
          photo: photoURL,
        };
  
        // Add the user to MongoDB
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(createdUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // Fetch the updated user list from MongoDB
            fetch("http://localhost:5000/users")
              .then((res) => res.json())
              .then((users) => {
                console.log(users);
              })
              .catch((error) => {
                console.error(error);
              });
          })
          .catch((error) => {
            console.error(error);
          });
  
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      });
  };
  
  ///////////////////////////////////////

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h1 className="text-3xl text-center font-bold">Login</h1>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <button onClick={handleGoogleLogin} className="btn">Login with GOOGLE</button>
          <p className="my-4 text-center">
            New to Toy Market{" "}
            <Link className="text-orange-600 font-bold" to="/sign-up">
              Sign Up
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
