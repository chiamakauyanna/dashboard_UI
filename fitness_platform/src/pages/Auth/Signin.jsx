import logo from "../../assets/images/logo.png";
import AuthOptions from "../../components/authentication/AuthOptions";
import Form from "../../components/authentication/Form";
import authImg from "../../assets/images/3d-gym-equipment.png";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="flex w-screen items-center justify-center md:h-screen lg:gap-12">
      {/* left section with form and sign in options */}
      <div className="w-full px-4 md:w-141">
        <div className="grid place-items-center py-8">
          <img src={logo} alt="logo" />
        </div>
        <div className="mb-4 font-medium">
          <h2 className="text-xl md:text-2xl">Welcome Back 👋</h2>
          <p className="text-textLight text-xs md:text-sm">
            Today is a new day. It's your day. You shape it. Sign in to start
            managing your projects.
          </p>
        </div>

        {/* Form section */}
        <form className="space-y-4">
          <Form
            htmlFor="email"
            label="Email"
            type="email"
            placeholder="Example@gmail.com"
          />
          <Form
            htmlFor="password"
            label="Password"
            type="password"
            placeholder="At least 8 characters"
          />
          <div className="grid w-full place-items-end py-2">
            <p className="text-accent text-xs font-medium md:text-sm">
              Forgot Password?
            </p>
          </div>
          <Button text="Sign In" className="w-full" />
        </form>

        <div className="grid place-items-center py-6 text-sm font-medium">
          <p className="">Or</p>
        </div>
        {/* Authentication options */}
        <AuthOptions type="in" />

        <div className="grid place-items-center py-6 text-sm font-medium">
          <p>
            {" "}
            Already have an account?{" "}
            <span className="text-accent">
              <Link to="/signup">Sign up</Link>{" "}
            </span>{" "}
          </p>
        </div>
      </div>

      {/* right section with image */}
      <div className="hidden lg:flex">
        <img src={authImg} alt="Image of gym equipment" />
      </div>
    </div>
  );
};

export default Signin;
