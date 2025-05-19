"use client";
// import { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PackageOpen } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HeaderAuth from "@/components/header-auth";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { EnvVarWarning } from "@/components/env-var-warning";

const Navbar = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const { user, signOut } = useAuth();
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="bg-white shadow-sm">
      <div className="container-custom mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <PackageOpen className="h-8 w-8 text-primary-700" />
              <span className="text-xl font-bold text-primary-900">Inventra</span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/') 
                    ? 'text-primary-700 bg-primary-50' 
                    : 'text-gray-700 hover:text-primary-700 hover:bg-gray-50'
                }`}
              >
                Home
              </Link>
              <Link
                href="/inventory"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/inventory')
                    ? 'text-primary-700 bg-primary-50' 
                    : 'text-gray-700 hover:text-primary-700 hover:bg-gray-50'
                }`}
              >
                Inventory
              </Link>
              {/* {user ? (
                <>
                  <Link
                    href="/dashboard"
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      pathname.startsWith('/dashboard')
                        ? 'text-primary-700 bg-primary-50' 
                        : 'text-gray-700 hover:text-primary-700 hover:bg-gray-50'
                    }`}
                  >
                    Dashboard
                  </Link>
                  <button
                    // onClick={signOut}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-700 hover:bg-gray-50"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <Link
                  href="/auth"
                  className="btn-primary"
                >
                  Sign In
                </Link>
              )} */}
               {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
            </div>
          </div>

          {/* Mobile Menu Button */}
          {/* <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div> */}
        </div>

        {/* Mobile Nav Links */}
        {/* {isMenuOpen && (
          <div className="md:hidden pb-3 space-y-1 animate-fadeIn">
            <Link
              href="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/') 
                  ? 'text-primary-700 bg-primary-50' 
                  : 'text-gray-700 hover:text-primary-700 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/inventory"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/inventory')
                  ? 'text-primary-700 bg-primary-50' 
                  : 'text-gray-700 hover:text-primary-700 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Inventory
            </Link>
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    pathname.startsWith('/dashboard')
                      ? 'text-primary-700 bg-primary-50' 
                      : 'text-gray-700 hover:text-primary-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    signOut();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-700 hover:bg-gray-50"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                href="/auth"
                className="block px-3 py-2 rounded-md text-base font-medium text-primary-700 hover:text-primary-800 hover:bg-primary-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
            )}
          </div>
        )} */}
      </div>
    </nav>
  );
};

export default Navbar;