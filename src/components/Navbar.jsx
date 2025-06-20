import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getUser, removeUser } from '../utils/storage';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(getUser());

  useEffect(() => {
    setUser(getUser());
  }, [location]);

  function handleLogout() {
    removeUser();
    setUser(null);
    navigate('/');
  }

  function handleProfileClick() {
    if (user?.venueManager) {
      navigate('/manager-profile');
    } else {
      navigate('/user-profile');
    }
  }

  return (
    <header className="bg-primary text-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div
            onClick={() => navigate('/')}
            className="text-2xl font-bold tracking-wide cursor-pointer"
          >
            EasyStay
          </div>

          {/* 👇 FAQ Link */}
          <span
            onClick={() => navigate('/faq')}
            className=" cursor-pointer text-white hover:underline transition text-sm"
          >
            FAQ
          </span>
        </div>

        <div className="flex items-center gap-4">
          {!user ? (
            <>
              <button
                onClick={() => navigate('/register')}
                className="text-white border border-white px-4 py-2 rounded-md hover:bg-white hover:text-primary transition"
              >
                New User
              </button>
              <button
                onClick={() => navigate('/login')}
                className="text-white border border-white px-4 py-2 rounded-md hover:bg-white hover:text-primary transition"
              >
                Sign in
              </button>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <div
                className="cursor-pointer flex items-center gap-2"
                onClick={handleProfileClick}
              >
                <img
                  src="/avatar1.png"
                  alt="avatar"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </div>
              <button
                onClick={handleLogout}
                className="text-white border border-white px-3 py-1 rounded-md hover:bg-white hover:text-primary transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
