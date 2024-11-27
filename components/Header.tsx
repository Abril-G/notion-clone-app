'use client'
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs"

function Header() {
  const { user } = useUser()

  return (
    <div className="flex items-center justify-between p-5">
      {user && (
        <h1 className="text-2xl">{user.firstName}&#39;s Space</h1>
      )}
      
      {/* BreadCrumbs */}

      <div className="flex justify-end">
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  )
}

export default Header