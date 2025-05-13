import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";

import { PackageOpen, BarChart, QrCode, Zap, Shield, UploadCloud as CloudUpload, Activity, CheckCircle } from 'lucide-react';
import Link from "next/link";

export default async function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 text-white">
        <div className="container-custom py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeIn">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Simplify Your Inventory Management
              </h1>
              <p className="text-xl text-primary-100 mb-8 max-w-lg">
                Inventra provides a powerful, intuitive platform to track, manage, and optimize 
                your inventory in real-time.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/inventory" className="btn-lg bg-white text-primary-800 hover:bg-gray-100">
                  View Inventory
                </Link>
                <Link href="/auth" className="btn-lg bg-primary-700 text-white border border-primary-600 hover:bg-primary-600">
                  Get Started
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary-400 opacity-20 rounded-full"></div>
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary-600 opacity-20 rounded-full"></div>
                <div className="relative bg-white p-8 rounded-xl shadow-2xl">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-primary-800 font-bold">Inventory Overview</h3>
                    <div className="bg-success-500 text-white text-xs px-2 py-1 rounded-full">Live</div>
                  </div>
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary-100 rounded-md flex items-center justify-center">
                            <PackageOpen className="h-5 w-5 text-primary-700" />
                          </div>
                          <div className="font-medium text-gray-800">Product {item}</div>
                        </div>
                        <div className="text-gray-600">124 units</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex justify-center">
                    <div className="w-32 h-8 bg-gray-200 rounded-md animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features for Efficient Management</h2>
            <p className="text-lg text-gray-600">Everything you need to track, manage, and optimize your inventory in one place</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-xl shadow-card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-primary-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Tracking</h3>
              <p className="text-gray-600">Monitor your inventory levels in real-time and receive alerts when items need restocking.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-xl shadow-card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <QrCode className="h-6 w-6 text-primary-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">QR Code Integration</h3>
              <p className="text-gray-600">Generate unique QR codes for each item for quick identification and information access.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-xl shadow-card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
              <p className="text-gray-600">Lightning-fast searches and updates regardless of your inventory size.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-xl shadow-card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Access</h3>
              <p className="text-gray-600">Role-based permissions ensure that users only access what they need.</p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-xl shadow-card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <CloudUpload className="h-6 w-6 text-primary-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cloud Storage</h3>
              <p className="text-gray-600">Store product images and documentation securely in the cloud.</p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-6 rounded-xl shadow-card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-primary-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Audit Trail</h3>
              <p className="text-gray-600">Complete history of all inventory changes for accountability and tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-800 to-primary-900 rounded-2xl p-10 md:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Inventory Management?</h2>
                <p className="text-primary-100 mb-6">Join thousands of businesses that trust Inventra for their inventory needs.</p>
                <Link href="/auth" className="btn-lg bg-white text-primary-800 hover:bg-gray-100">
                  Get Started for Free
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map(item => (
                    <div key={item} className="bg-primary-700 bg-opacity-50 p-4 rounded-lg flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary-300" />
                      <span className="text-sm">
                        {item === 1 && 'Easy Setup'}
                        {item === 2 && 'Full Support'}
                        {item === 3 && 'Regular Updates'}
                        {item === 4 && 'Data Security'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
