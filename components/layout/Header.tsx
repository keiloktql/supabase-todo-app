import Image from "next/image";
import React from "react";
import Logo from "@/public/assets/svg/logo.svg";
import Link from "next/link";
import Button from "@/components/shared/Button";
import { BTN_ENUM } from "@/config/enum";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <header className="h-20 w-full backdrop-saturate-[180%] backdrop-blur-[20px] fixed z-50 justify-center top-0 left-0">
      <div className="flex h-full max-w-screen-xl justify-between w-full m-auto px-16">
        {/* 1280px */}
        <div className="flex">
          <Link className="flex" href="/dashboard">
            <Image src={Logo} width={146} height={48} alt="Logo" />
          </Link>
          <ul className="mx-16 flex justify-center items-center h-full">
            <Link className="mr-2" href="/dashboard">
              Dashboard
            </Link>
            <Link className="ml-2" href="/pricing">
              Pricing
            </Link>
          </ul>
        </div>
        <div className="flex">
          <Button
            variation={BTN_ENUM.PRIMARY_EMPTY}
            onClickFn={() => router.push("/login")}
          >
            Log in
          </Button>
          <Button onClickFn={() => router.push("/sign-up")}>Sign Up</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
