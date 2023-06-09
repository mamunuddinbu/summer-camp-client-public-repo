import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import useTitle from "../../hooks/useTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const SignUp = () => {
  useTitle("SignUp");
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [singUpError, setSignUpError] = useState('');
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm();

  // const onSubmit = async (data) => {
  //   try {
  //     const { email, password, name, photoUrl } = data;
  //     console.log(data);
  //     const result = await createUser(email, password)




  //     const user = result.user;
  //     const updatedUser = {
  //       ...user,
  //       displayName: name,
  //       photoURL: photoUrl || null,
  //     };

  //   //   updateUserProfile(name, photoUrl).then(
  //   //     result=>{
  //   //       const  loggedUser=result.user;
  //   //       console.log('Updated user' );
  //   //     }
  //   //   )

  //     console.log("created user", updatedUser);
  //   } catch (error) {
  //     console.error(error);
  //     setError("general", {
  //       type: "manual",
  //       message: error.message,
  //     });
  //   }
  // };


  const onSubmit = (data) => {
    console.log();
    setSignUpError('');
    createUser(data.email, data.password)
        .then(result => {
            const userInfo = {
                displayName: data.name,
            }
            updateUserProfile(data.name,data.photoUrl)
                .then(() => {
                  console.log(data.photoUrl, data.name);
                    console.log("lolololo" );
                    Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'Your work has been saved',
                      showConfirmButton: false,
                      timer: 1500
                    })
                })
                .catch(err => console.log("update1 ",err));
        })
        .catch(error => {
            console.log(error)
            setSignUpError(error.message)
        })

    // const saveUser = (name, email) => {
    //     const role = 'seller'
    //     const user = { name, email, role };
    //     fetch('https://tech-com-server.vercel.app/users', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setCreateUserEmail(email)
    //         })
    // }

}






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
              {errors.name && (
                <span className="text-red-500">Name is required</span>
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
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          {errors.general && (
            <p className="text-red-500 mb-4">{errors.general.message}</p>
          )}

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
