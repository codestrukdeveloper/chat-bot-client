import React, { useState, useRef, useEffect } from "react";
import { useAuthProfile } from "@/hooks/useAuthProfile";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { MdOutlineDashboardCustomize } from "react-icons/md";

import { FiLogOut, FiSettings, FiUser } from "react-icons/fi";

const UserProfile = () => {
  const { user, isAuthenticated, loading, error, logout } = useAuthProfile();
  const [showProfile, setShowProfile] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);



  

  return (
    <div className="relative" ref={profileRef}>
      {isAuthenticated ? (
        <div onClick={() => setShowProfile(!showProfile)} className="">
          <FiUser size={22} className="cursor-pointer text-gray-600" />
        </div>
      ) : (
        <div className="space-x-2">
          <Link to="/auth/signin">
            <Button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
              Sign In
            </Button>
          </Link>
          <Link to="/auth/signup">
            <Button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">
              Create Account
            </Button>
          </Link>
        </div>
      )}

      {showProfile && user && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg overflow-hidden z-10 border border-gray-200">
          <div className="p-4">
            <div className="flex items-center space-x-3 mb-3">
              {user.profileImageUrl ? (
                <img
                  src={user.profileImageUrl}
                  alt={user.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <FiUser size={24} className="text-gray-600" />
                </div>
              )}
              <div>
                <h3 className="text-sm font-semibold text-gray-800">
                  {user.name}
                </h3>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
            </div>
            <Link
              to="/dashboard"
              className="flex cursor-pointer items-center py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 transition duration-300"
            >
              <MdOutlineDashboardCustomize size={20} className="mr-2" />
              Dashboard
            </Link>
            <Link
              to="/settings"
              className="flex items-center cursor-pointer py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 transition duration-300"
            >
              <FiSettings size={20} className="mr-2" />
              Settings
            </Link>
            <div
              onClick={logout}
              className="w-full text-left flex cursor-pointer items-center py-2 px-4 text-sm text-red-600 hover:bg-red-50 transition duration-300"
            >
              <FiLogOut size={20} className="mr-2" />
              Sign out
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
