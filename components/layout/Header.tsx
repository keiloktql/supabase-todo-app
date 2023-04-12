import Image from "next/image";
import React from "react";
import Logo from "@/public/assets/svg/logo.svg";
import Link from "next/link";
import Button from "@/components/shared/Button";
import { BTN_ENUM } from "@/config/constants";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <header className="fixed left-0 top-0 z-50 h-20 w-full justify-center backdrop-blur-[20px] backdrop-saturate-[180%]">
      <div className="m-auto flex h-full w-full max-w-screen-xl justify-between px-16">
        {/* 1280px */}
        <div className="flex">
          <Link className="flex" href="/">
            <Image src={Logo} width={146} height={48} alt="Logo" />
          </Link>
          <ul className="mx-16 flex h-full items-center justify-center">
            <Link
              className="mr-4 font-semibold text-gray-600 hover:underline"
              href="/dashboard"
            >
              Dashboard
            </Link>
            <Link
              className="ml-4 font-semibold text-gray-600  hover:underline"
              href="/pricing"
            >
              Pricing
            </Link>
          </ul>
        </div>
        <div className="flex items-center">
          <Button
            variation={BTN_ENUM.PRIMARY_EMPTY}
            onClickFn={() => router.push("/login")}
            customClassName="mr-2"
          >
            Log In
          </Button>
          <Button
            onClickFn={() => router.push("/sign-up")}
            customClassName="ml-2"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
