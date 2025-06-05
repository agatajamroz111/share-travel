import { Link } from "react-router-dom";

const LandingPageUnlog: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-[#d9d9d9] rounded p-8 min-h-[500px] flex flex-col">
          <div className="p-4">
            <p className="text-[#18191f]">
              Informacje co oferujemy - jakiś krótki opis
            </p>
          </div>

          <div className="flex-grow flex items-center justify-center">
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/login"
                className="bg-white text-primary px-8 py-4 rounded text-center min-w-[150px]"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-primary text-white px-8 py-4 rounded text-center min-w-[150px]"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPageUnlog;
