import { Menu, X, PackageOpen } from 'lucide-react';
import Link from 'next/link';

import HeaderAuth from "@/components/header-auth";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { EnvVarWarning } from "@/components/env-var-warning";

const Navbar2 = () => {

  return (
    <nav className="bg-white shadow-sm">
      <div className="container-custom mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <PackageOpen className="h-8 w-8 text-primary-700" />
              <span className="text-xl font-bold text-primary-900">Inventra</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className='px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-700 hover:bg-gray-50'
              >
                Home
              </Link>
              <Link
                href="/inventory"
                className='px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-700 hover:bg-gray-50'
              >
                Inventory
              </Link>
              {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar2;