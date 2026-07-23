import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="pg-page min-h-screen flex items-center justify-center hero-gradient">
      <div className="text-center relative z-10">
        <h1 className="pg-heading text-6xl mb-4 gradient-text">404</h1>
        <p className="text-xl text-white/60 mb-6">Oops! Page not found</p>
        <a href="/" className="btn-pg">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
