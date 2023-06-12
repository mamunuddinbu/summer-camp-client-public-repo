import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import useTitle from "../../hooks/useTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const SignUp = () => {
  useTitle("SignUp");
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setSignUpError("");
   // Password validation
   const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/;
   if (!passwordRegex.test(data.password)) {
     if (data.password.length < 6) {
       setError("password", { message: "Password must be at least 6 characters" });
     }
     if (!/[A-Z]/.test(data.password)) {
       setError("password", { message: "Password must contain at least one capital letter" });
     }
     if (!/[!@#$%^&*]/.test(data.password)) {
       setError("password", { message: "Password must contain at least one special character" });
     }
     return;
   }
   //-------------------------

    createUser(data.email, data.password)
      .then((result) => {
        const { name, photoUrl } = data;
        const userInfo = {
          displayName: name,
        };
        updateUserProfile(name, photoUrl)
          .then(() => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "User has created",
              showConfirmButton: false,
              timer: 1500,
            });
            saveUser(data.name, data.email, data.photoUrl);
            reset();
            navigate(from, { replace: true });
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        setSignUpError(error.message);
      });
    /////////////////////////////
    const saveUser = (name, email, photo) => {
      const role = "student";
      const user = { name, email, role, photo };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    };
    /////////////////////////////
  };

  return (
    <div className="flex justify-center">
      
    <div className=" bg-base-200 min-h-screen max-w-sm m-3 card shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="name"
              className="input input-bordered"
            />
            {errors.name && (
              <span className="text-red-500">{errors.message}</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", { required: true })}
              placeholder="email"
              className="input input-bordered"
            />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              {...register("photoUrl")}
              placeholder="Photo URL"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="password"
              className="input input-bordered"
            />
            {errors.password && (
              <span className="text-red-500">Password is required</span>
            )}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Sign Up" />
          </div>
        </form>
        {signUpError && <p className="text-red-500 mb-4">{signUpError}</p>}

        <p className="my-4 text-center">
          Already Have an Account?
          <Link className="text-orange-600 font-bold" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
