"use client";

import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="flex items-center gap-x-4 p-5 bg-green-500">
        <div className="hidden lg:flex lg:flex-1 bg-orange-500">
            {/* TODO : ADD SEARCH */}
            Search area
        </div>
        <UserButton />
        Navbar
    </div>
  )
}
 
export default Navbar