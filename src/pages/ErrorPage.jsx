// pages/ErrorPage.jsx
import React from "react";
import { useRouteError, useNavigate } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  
  console.error(error);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-md w-full text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold mb-2" style={{ color: '#0E4C4A' }}>
            404
          </h1>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#F4B824' }}></div>
        </div>

        {/* Message */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3" style={{ color: '#0E4C4A' }}>
            Page Not Found
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            {error?.statusText 
              ? `Error: ${error.statusText}` 
              : "The page you're looking for doesn't exist or has been moved."}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
            style={{ borderColor: '#0E4C4A' }}
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
          
          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-2 px-6 py-3 text-white rounded-lg font-medium transition-colors duration-200"
            style={{ 
              backgroundColor: '#0E4C4A',
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#0a3835'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#0E4C4A'}
          >
            <Home className="w-5 h-5" />
            Home Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;