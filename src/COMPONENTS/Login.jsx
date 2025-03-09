import { Link } from "react-router-dom";
import Navber from "./Navber/Navber";

const Login = () => {
  return (
    <div className="">
      <Navber></Navber>
      <div className="mt-10 container mx-auto">
        <Link to="/">
          <button className="btn border-[#331A15] hover:bg-[#D2B48C]">
            <i className="fa-solid fa-arrow-left-long"></i> Back to home
          </button>
        </Link>
        <div className="font-raleway hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input w-full"
                  placeholder="Email"
                />
                <label className="fieldset-label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input w-full"
                  placeholder="Password"
                />
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
