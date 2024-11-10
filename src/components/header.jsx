// import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "./ui/button";
// import {
//   SignedIn,
//   SignedOut,
//   UserButton,
//   SignIn,
//   useUser,
// } from "@clerk/clerk-react";
// import { Button } from "./ui/button";
// import { BriefcaseBusiness, Heart, PenBox, UserIcon } from "lucide-react";

const Header = () => {
  // const [showSignIn, setShowSignIn] = useState(false);

  // const [search, setSearch] = useSearchParams();
  // const { user } = useUser();

  // useEffect(() => {
  //   if (search.get("sign-in")) {
  //     setShowSignIn(true);
  //   }
  // }, [search]);

  // const handleOverlayClick = (e) => {
  //   if (e.target === e.currentTarget) {
  //     setShowSignIn(false);
  //     setSearch({});
  //   }
  // };

  return (
    <>
      <nav className="flex items-center justify-between py-4">
        <Link
          to="/"
          className="flex items-center transition duration-200 text-primary-500 hover:text-primary-700"
        >
          <img
            src="/logo-topaz-enhance-coupe.jpeg"
            className="h-10 rounded-full sm:h-14 md:h-18 lg:h-22 rounded-ful"
            alt="Logo"
          />
          {/* Texte caché sur petit écran */}
          <div className="hidden ml-2 text-center sm:flex sm:flex-row sm:items-center sm:text-left">
            <p className="text-xs font-bold text-primary sm:text-sm md:text-md lg:text-lg">
              AFRIQUE&nbsp;
            </p>
            <p className="text-xs font-bold text-primary sm:text-sm md:text-md lg:text-lg">
              AVENIR&nbsp;
            </p>
            <p className="text-xs font-bold text-primary sm:text-sm md:text-md lg:text-lg">
              ACQUISITION&nbsp;
            </p>
          </div>
        </Link>
        <Button> Login</Button>
      </nav>
    </>
  );
};

export default Header;
