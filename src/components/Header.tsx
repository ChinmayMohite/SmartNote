'use client'
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs"

const Header = () => {
  const {user} = useUser();
  return (
    <div className="flex items-center justify-between p-5">
      {user && (
        <h1 className="text-2xl">Welcome {user?.firstName}{`'s`} Space</h1>
      )}
      <div>
        <SignedOut>
          <SignInButton></SignInButton>
        </SignedOut>
          <SignedIn>
            <UserButton></UserButton>
          </SignedIn>
      </div>
    </div>
  )
}
export default Header