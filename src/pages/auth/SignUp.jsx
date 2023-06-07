import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import useTitle from "../../hooks/useTitle";
import { useForm } from "react-hook-form";

const SignUp = () => {
  useTitle("SignUp");
  const { createUser } = useContext(AuthContext);
  const { register, handleSubmit, setError, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const { name, email, password, photoUrl } = data;
      console.log(name, email, password);

      const result = await createUser(email, password);
      const user = result.user;
      console.log("created user", user);
    } catch (error) {
      console.error(error);
      setError("general", {
        type: "manual",
        message: error.message,
      });
    }
  };

  return (
    <div className="bg-base-200 min-h-screen">
      <div className="w-full max-w-sm m-7 card shadow-2xl bg-base-100">
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
              {errors.name && <span className="text-red-500">Name is required</span>}
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
              {errors.email && <span className="text-red-500">Email is required</span>}
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
              {errors.password && <span className="text-red-500">Password is required</span>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          {errors.general && <p className="text-red-500 mb-4">{errors.general.message}</p>}

          <p className="my-4 text-center">
            Already Have an Account?{" "}
            <Link className="text-orange-600 font-bold" to="/login">
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
