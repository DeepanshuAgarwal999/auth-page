"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/usercontext";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const AccountPage = () => {
  const { userStatus, setUserStatus, userAccount, setUserAccount } = useAuth();
  const [update, setUpdate] = useState(false);
  const [values, setValues] = useState({
    email: userAccount?.email || "",
    name: userAccount?.name || "",
    password: userAccount?.password || "",
    phone: userAccount?.phone || "",
    address: userAccount?.address || "",
  });
  const router = useRouter();
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    if (!userStatus) {
      console.log(userStatus);
      router.push("/");
    }
  }, [userStatus]);

  const toggleUpdate = () => {
    var toastId = toast.loading("Update Mode On!!");
    setUpdate(true);
    // toast.loading("Update Mode On!!")

    setTimeout(() => {
      toast.dismiss(toastId);
    }, 3000);
    //  toast.dismiss(toastId);
  };

  const handleUpdate = () => {
    setUserAccount(JSON.stringify(values));
    setUpdate(false);

    toast.success("user Updated Successfully");
  };

  const handleLogout = () => {
    setUserStatus(false);
    localStorage.setItem("auth", false);
    toast.success("Logout successfully");
  };
  return (
    <div className="p-10">
      <div className="px-4 sm:px-0 flex justify-between items-start">
        <div>
          <h3 className="text-2xl pb-4 font-semibold leading-7 text-gray-900">
            Account Details
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            User details and application.
          </p>
        </div>
        <button
          className="flex w-fit justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Full name
            </dt>
            <dd>
              <input
                id="name"
                name="name"
                type="name"
                readOnly={!update ? true : false}
                value={values.name}
                onChange={(e) => handleChange(e)}
                autoComplete="name"
                required
                className="block w-full rounded-md border-0 py-1.5 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0"
              />
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Email address
            </dt>
            <dd>
              <input
                id="email"
                name="email"
                type="email"
                readOnly={!update ? true : false}
                value={values.email}
                onChange={(e) => handleChange(e)}
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0"
              />
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              password
            </dt>
            <dd>
              <input
                id="password"
                name="password"
                type="password"
                readOnly={!update ? true : false}
                value={values.password}
                onChange={(e) => handleChange(e)}
                autoComplete="password"
                required
                className="block w-full rounded-md border-0 py-1.5 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0"
              />
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Phone
            </dt>
            <dd>
              <input
                id="phone"
                name="phone"
                type="phone"
                readOnly={!update ? true : false}
                value={values.phone}
                onChange={(e) => handleChange(e)}
                autoComplete="phone"
                required
                className="block w-full rounded-md border-0 py-1.5 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0"
              />
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Address
            </dt>
            <dd>
              <input
                id="address"
                name="address"
                type="address"
                readOnly={!update ? true : false}
                value={values.address}
                onChange={(e) => handleChange(e)}
                autoComplete="address"
                required
                className="block w-full rounded-md border-0 py-1.5 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0"
              />
            </dd>
          </div>
        </dl>
      </div>
      <div className="flex gap-5 items-center justify-center w-full">
        {update ? (
          <button
            type="submit"
            className="flex w-fit justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleUpdate}
          >
            Save Changes
          </button>
        ) : (
          <button
            type="submit"
            className="flex w-fit justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={toggleUpdate}
          >
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default AccountPage;
