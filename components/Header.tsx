'use client'
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs"
import BreadCrumbs from "./BreadCrumbs"

function Header() {
  const { user } = useUser()

  return (
    <>
    <div className="flex items-center justify-between p-5">
      {user && (
        <h2 className="text-xl font-semibold">{user.firstName}&#39;s Space</h2>
      )}
      
     <div className="hidden sm:block"> <BreadCrumbs /> </div>

      <div className="flex justify-end">
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
    </>
  )
}

export default Header