import { Link, useNavigate } from "react-router-dom";
import countrycodes from "../constants/country_dailer_code.json";
import { useDispatch, useSelector } from "react-redux";
import { doSignUp } from "../redux/slices/accountsSlice";
import { useState } from "react";

const Register = () => {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((store) => store.accountData);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const pass1 = formData.get("password1");
    const pass2 = formData.get("password2");

    if (pass1 !== pass2) {
      setError({ status: 201, errorMsg: "Passwords are not match", msg: "" });
      resetErr();
      return;
    }
    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      password: pass1,
      contact: `${formData.get("country_code")} ${formData.get("contact")}`,
    };
    handleSignUp(payload);
  };

  const resetErr = (completed) => {
    setTimeout(() => {
      setError("");
      if(completed){
        navigate('/login')
      }
    }, 2000);
  };

  const handleSignUp = (payload) => {
    const {email} = payload;

    const isFound = users.some((u) => u.email === email);

    if (isFound) {
      setError({ status: 201, errorMsg: "User already exists", msg: "" });
      resetErr();
      return;
    }

    dispatch(doSignUp(payload));
    setError({ status: 200, errorMsg: "", msg: "Resgistration successful" });
    resetErr(true);
  };

  return (
    <div className="flex-center my-auto h-screen min-h-[650px]">
      <form
        className="flex flex-col gap-5 justify-center w-[85%]"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h1 className="text-black text-3xl font-bold text-start w-max ps-2">
          Sign Up
        </h1>
        <div className="bg-primary rounded-3xl gap-5 flex flex-col p-4 lg:p-8 2xl:p-11">
          {
           <p className={`rounded-lg text-sm text-center h-7 text-white p-1 invisible ${error?.status && '!visible'} ${error?.status === 200 ? 'bg-green-300' : '  bg-red-300'}`}>{error?.status === 200 ? error?.msg : error?.errorMsg}</p>
          }
          <div className="inputs-container flex gap-5">
            <div className="flex flex-col gap-1 flex-1">
              <label
                className="text-black font-semibold text-sm"
                htmlFor="firstName"
              >
                Frist Name
              </label>
              <input
                className="h-14 rounded-lg p-2"
                type="text"
                name="firstName"
                id="firstName"
                required
              />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <label
                className="text-black font-semibold text-sm"
                htmlFor="LastName"
              >
                Last Name
              </label>
              <input
                className="h-14 rounded-lg px-2"
                type="text"
                name="lastName"
                id="LastName"
              />
            </div>
          </div>
          <div className="inputs-container flex gap-5">
            <div className="flex flex-col gap-1 flex-1">
              <label
                className="text-black font-semibold text-sm"
                htmlFor="email-id"
              >
                Email Id
              </label>
              <input
                className="h-14 rounded-lg p-2"
                type="email"
                name="email"
                id="email-id"
              />
            </div>
            <div className="inputs-wrapper flex gap-3 flex-1">
              <div className="flex flex-col gap-1 w-3/6 xl:w-2/6  2xl:w-1/5">
                <label
                  className="text-black font-semibold text-sm"
                  htmlFor="Contact"
                >
                  Contact Number
                </label>
                <select
                  className="h-14 rounded-lg p-1 px-3 font-bold alter-select-arrow"
                  name="country_code"
                  id=""
                >
                  {countrycodes?.map((item,ind) => (
                    <option 
                      key={ind+"##"}
                      value={item?.dial_code}
                      className="font-normal text-sm"
                    >
                      {item?.dial_code}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1 w-3/6 xl:w-4/6  2xl:w-4/5">
                <label
                  className="text-black font-semibold text-sm invisible"
                  htmlFor="Contact"
                >
                  contact
                </label>
                <input
                  className="h-14 rounded-lg p-2"
                  required
                  type="text"
                  name="contact"
                  id="password"
                />
              </div>
            </div>
          </div>
          <div className="inputs-container flex gap-5">
            <div className="flex flex-col gap-1 flex-1">
              <label
                className="text-black font-semibold text-sm"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="h-14 rounded-lg p-2"
                type="text"
                name="password1"
                id="email-id"
              />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <label
                className="text-black font-semibold text-sm"
                htmlFor="confirm-password"
              >
                Confirm Password
              </label>
              <input
                className="h-14 rounded-lg p-2"
                type="password"
                name="password2"
                id="confirm-password"
              />
            </div>
          </div>
        </div>
        <p className="text-center text-[#707070] text-lg my-[6px] font-medium">
          Already have an Account?
          <b>
            <Link to={"/login"}> Login</Link>
          </b>
        </p>
        <button className="w-[30%] font-semibold flex-center p-4 mx-auto bg-secondary text-white">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
