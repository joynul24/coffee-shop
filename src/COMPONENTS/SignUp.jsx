import { Link } from "react-router-dom";
import Navber from "./Navber/Navber";
import { useContext } from "react";
import { AuthContext } from "./provider/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
    .then(result => {
      console.log('user created at fb', result.user);
      const createdAt = result?.user?.metadata?.creationTime;
      const newUser = {name, email, createdAt}
      fetch('http://localhost:5000/users',{
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(newUser)
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId) {
          console.log('user created in db');
        }
      })
    })
    .catch(error => {
      console.log('ERROR', error.message);
    })
  };

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
            <form onSubmit={handleSignUp} className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input w-full"
                  placeholder="Name"
                />
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
                <button className="btn btn-neutral mt-4">Sign Up</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
