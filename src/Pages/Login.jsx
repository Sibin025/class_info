import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setisUseLoggedIn } from "../redux/slices/userSlice";

const Login = () => {
  const [error, setError] = useState("");
  const { users } = useSelector((store) => store.accountData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    handleSignIn(formData.get("email"), formData.get("password"));
  };

  const handleSignIn = (email, password) => {
    const user = users.find((u) => u.email === email);

    if (user === undefined) {
      setError({ status: 201, errorMsg: "User Not Found", msg: "" });
      resetErr()
      return
    }
    
     if(user.password !== password) {
      setError({ status: 201, errorMsg: "Incorrect password", msg: "" });
      resetErr()
      return
     }

     dispatch(setisUseLoggedIn(true));
     setError({ status: 200, errorMsg: "", msg: "Login Successfull.Redirecting to home page..." });
     resetErr(true);
  };

  const resetErr = (completed) => {
    setTimeout(() => {
      setError("");
      if(completed){
        navigate('/')
      }
    }, 2000);
  };

  return (
    <div className="flex-center my-auto h-screen  xl:max-w-[1440px] xl:m-auto">
      <form
        className="flex flex-col gap-5 justify-center w-8/12 lg:w-5/12 "
        onSubmit={(e) => handleSubmit(e)}
      >
        <h1 className="text-black text-3xl font-bold text-start w-max ps-2">
          Login
        </h1>
        <div className="bg-primary rounded-3xl p-12">
          <p
            className={`rounded-lg text-sm text-center h-7 text-white p-1 invisible mb-1 ${
              error?.status && "!visible"
            } ${error?.status === 200 ? "bg-green-300" : "  bg-red-300"}`}
          >
            {error?.status === 200 ? error?.msg : error?.errorMsg}
          </p>
          <div className="flex flex-col gap-1">
            <label
              className="text-black font-semibold text-sm"
              htmlFor="email-id"
            >
              Email Id
            </label>
            <input
              required
              className="h-14 rounded-lg p-2"
              type="email"
              name="email"
              id="email-id"
            />
          </div>
          <div className="flex flex-col gap-1 mt-5">
            <label
              className="text-black font-semibold text-sm"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="h-14 rounded-lg p-2"
              type="password"
              name="password"
              required
              id="password"
            />
          </div>
        </div>
        <Link to={"/register"}>
          <p className="text-center text-[#707070] text-lg my-[6px] font-medium">
            Create new account
          </p>
        </Link>
        <button className="w-3/5 font-semibold flex-center p-4 mx-auto bg-secondary text-white">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
