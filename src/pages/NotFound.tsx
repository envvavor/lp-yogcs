import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Rocket, Home, TriangleAlert } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden animate-fade-in-up">
        <div className="p-8 text-center">
          <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-red-100 dark:bg-red-900/50 mb-6">
            <TriangleAlert className="h-12 w-12 text-red-500 dark:text-red-400" />
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-3">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Page Not Found
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            The page you're looking for doesn't exist or has been moved.
            <br />
            <span className="text-sm opacity-75">
              (Tried to access: <code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">{location.pathname}</code>)
            </span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={() => navigate("/")}
              className="gap-2"
            >
              <Home className="h-4 w-4" />
              Return Home
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate(-1)}
            >
              Go Back
            </Button>
          </div>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-700/50 px-8 py-4 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Need help?{" "}
            <a 
              href="mailto:support@example.com" 
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;