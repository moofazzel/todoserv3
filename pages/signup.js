import { useContext } from "react";
import google from "../public/icons/google.svg";
import logo from "../public/logo.png";
import { AuthContext } from "../Context/AuthProvider";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { handleRegister, UpdateNamePhotoURL, googleSignIn } =
    useContext(AuthContext);

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        // if (user) {
        //   navigate(from, { replace: true });
        // }
      })
      .then((err) => {
        console.error(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    const photoURL = from.photoURL.value;
    const fullName = from.fullName.value;
    console.log(email);

    handleRegister(email, password)
      .then((result) => {
        const user = result.user;
        handleUpdateNamePhoto(fullName, photoURL);
        from.reset();
      })
      .catch((err) => console.error("register", err));

    const handleUpdateNamePhoto = (fullName, photoURL) => {
      const profile = {
        displayName: fullName,
        photoURL: photoURL,
      };
      UpdateNamePhotoURL(profile)
        .then(() => {
          navigator("/");
        })
        .catch((err) => console.error(err));
    };
  };
  return (
    <div>
      <div>
        <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
          <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
            <div className="p-4 py-6 text-white bg-primary md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
              <div className="my-3 text-4xl font-bold tracking-wider text-center">
                <Link href="#">
                  <img src={logo} alt="" />
                </Link>
              </div>
              <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
                With the power of K-WD, you can now focus only on functionaries
                for your digital products, while leaving the UI design on us!
              </p>
              <p className="flex flex-col items-center justify-center mt-10 text-center">
                <span>Already have an account?</span>
                <Link href={"/login"} className="underline  ">
                  Login
                </Link>
              </p>
              <p className="mt-6 text-sm text-center text-gray-300">
                Read our
                <Link href="#" className="underline ">
                  terms
                </Link>
                and
                <Link href="#" className="underline ">
                  conditions
                </Link>
              </p>
            </div>
            <div className="p-5 bg-white md:flex-1">
              <h3 className="my-4 text-2xl font-semibold text-gray-700">
                Account Register
              </h3>
              <form
                action="#"
                onSubmit={handleSubmit}
                className="flex flex-col space-y-5"
              >
                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Enter Email
                  </label>
                  <input
                    required
                    name="email"
                    type="email"
                    id="email"
                    autoFocus
                    className="px-4 py-2 text-black dark:text-gray-200 transition duration-300 border border-violet-300 rounded-full focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor="PhotoURL"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Photo URL
                  </label>
                  <input
                    required
                    name="photoURL"
                    type="URL"
                    id="PhotoURL"
                    autoFocus
                    className="px-4 py-2 text-black dark:text-gray-200 transition duration-300 border border-violet-300 rounded-full focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor="fullName"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Full Name
                  </label>
                  <input
                    required
                    name="fullName"
                    type="text"
                    id="fullName"
                    autoFocus
                    className="px-4 py-2 text-black dark:text-gray-200 transition duration-300 border border-violet-300 rounded-full focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-sm font-semibold text-gray-500"
                    >
                      Password
                    </label>
                  </div>
                  <input
                    required
                    name="password"
                    type="password"
                    id="password"
                    className="px-4 py-2 text-black dark:text-gray-200 transition duration-300 border border-violet-300 rounded-full focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-primary checked:bg-priring-primary"
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Accept
                    <Link href="#" className="underline mx-1 ">
                      terms
                    </Link>
                    and
                    <Link href="#" className="underline ml-1 ">
                      conditions
                    </Link>
                  </label>
                </div>
                <div className="pb-5">
                  <button
                    disabledd
                    type="submit"
                    className=" w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-primary rounded-full shadow-xl hover:bg-violet-800 focus:outline-none focus:ring-blue-200 focus:ring-4 mb-4 disabled:bg-gray-500"
                  >
                    Register
                  </button>
                  <Link
                    href="#"
                    onClick={handleGoogleLogin}
                    className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 group hover:bg-[#237539]  focus:outline-none  rounded-full"
                  >
                    <button className="flex items-center text-sm font-medium text-[#319f4f] group-hover:text-white">
                      <FcGoogle className="text-xl mr-1" />
                      Google
                    </button>
                  </Link>
                </div>
                {/* <div className="flex flex-col space-y-5">
                  <span className="flex items-center justify-center space-x-2">
                    <span className="h-px bg-yellow-400 w-14"></span>
                    <span className="font-normal text-gray-500">
                      or Sign up with
                    </span>
                    <span className="h-px bg-yellow-400 w-14"></span>
                  </span>
                  <div className="flex flex-col space-y-4">
                    <Link
                      href="#"
                      className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
                    >
                      <span>
                        <svg
                          className="w-5 h-5 text-gray-800 fill-current group-hover:text-white"
                          viewBox="0 0 16 16"
                          version="1.1"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                          ></path>
                        </svg>
                      </span>
                      <span className="text-sm font-medium text-gray-800 group-hover:text-white">
                        Github
                      </span>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-[#237539]  focus:outline-none"
                    >
                      <span>
                        <img className="w-5" src={google} alt="" />
                      </span>
                      <span className="text-sm font-medium text-[#319f4f] group-hover:text-white">
                        Google
                      </span>
                    </Link>
                  </div>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
