"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "./context/usercontext";

const page = () => {
  const { userStatus } = useAuth();
  const router = useRouter();
  console.log(userStatus);
  React.useEffect(() => {
    if (userStatus) {
      router.push("/account");
    }
  }, [userStatus]);

  return (
    <div className="min-h-screen flex flex-col gap-5 items-center pt-20 w-full text-2xl sm:text-4xl tracking-wide font-semibold">
      <h1>You are not signed</h1>
      <h1>Already register? please login</h1>
      <Link href={"/login"}>
        <button className="flex w-full justify-center rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Log in
        </button>
      </Link>
      <h1>New? please Register</h1>
      <Link href={"/register"}>
        <button className="flex w-full justify-center rounded-md bg-indigo-600 px-6 py-3 text-lg  font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Register
        </button>
      </Link>
    </div>
  );
};

export default page;
