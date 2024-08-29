"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { ModeToggle } from "./ModeToggle";
import Breadcrums from "./Breadcrums";

const Header = () => {
  const { user } = useUser();
  return (
    <div className="flex items-center justify-between p-5 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-md border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <h1 className="text-2xl font-semibold">
              Welcome {user.firstName}
            </h1>
            {/* <div className="flex items-center justify-between">
              
            </div> */}
          </>
        ) : (
          <h1 className="text-2xl font-semibold">SmartNote</h1>
        )}
      </div>
      <Breadcrums></Breadcrums>
      <div className="flex items-center space-x-4">
        <ModeToggle />
        <SignedOut>
          <SignInButton>
            <span className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
              Sign In
            </span>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Header;
