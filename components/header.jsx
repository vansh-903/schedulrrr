import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { PenBox } from "lucide-react";
import { SignedOut } from "@clerk/nextjs";
import { SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import UserMenu from './user-menu'
import { checkUser } from "@/lib/checkUser";

const Header = async() => {

  await checkUser();

  return (
    <nav className="justify-between mx-auto py-2 px-4 flex items-center shadow-md border-b-2">
      <Link href={"/"} className="flex items-center">
        <Image
          src="/logo.png"
          width="150"
          height="60"
          className="w-auto h-16"
          alt="Schedulrr logo"
        />
      </Link>

      <div className="gap-4 items-center flex">
        <Link href='/events?create=true  '>
            <SignInButton forceRedirectUrl="/dashboard">
                <Button className="flex gap-2 items-center">
                    <PenBox size={18} />
                    Create Event
                </Button>
            </SignInButton>
        </Link>

        <SignedOut>
            <Button variant='outline'>Login</Button>
        </SignedOut>
        <SignedIn>
            <UserMenu/>
        </SignedIn>
      </div>
    </nav>
  );
};

export default Header;
