// pages/ErrorPage.jsx
// pages/ErrorPage.jsx
import React from "react";
import { useRouteError } from "react-router-dom";
import { Home, ArrowLeft, Search } from "lucide-react";

const ErrorPage = () => {
  const error = useRouteError();
  

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Animated 404 */}
        <div className="text-center mb-8">
          <h1 className="text-9xl font-bold text-white mb-4 animate-pulse">
            404
          </h1>
          <div className="relative">
            <div className="absolute inset-0 blur-xl bg-white/30 rounded-full"></div>
            <h2 className="relative text-4xl font-semibold text-white mb-4">
              Page Not Found
            </h2>
          </div>
        </div>

        {/* Glass card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
          <p className="text-white/90 text-lg text-center mb-8">
            {error?.status 
              ? `Error ${error.status}: ${error.statusText || "Something went wrong"}` 
              : "The page you're looking for seems to have wandered off into the digital void."}
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.history.back()}
              className="group flex items-center justify-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/30"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </button>
            
            <a
              href="/"
              className="group flex items-center justify-center gap-2 px-6 py-3 bg-white text-purple-600 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Home className="w-5 h-5" />
              Home Page
            </a>
          </div>

          {/* Decorative elements */}
          <div className="mt-8 flex justify-center gap-3">
            <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce"></div>
            <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "0.1s" }}></div>
            <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="fixed top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="fixed bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>
    </div>
  );
};

export default ErrorPage;
