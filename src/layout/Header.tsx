import { Link } from "react-router-dom";

const Header: React.FC = () => (
  <header className="container mx-auto px-4 py-4 flex items-center justify-between">
    <div className="flex-shrink-0">
      <Link to="">
        <img
          src="/logo.png"
          alt="ShareTravel"
          width={200}
          height={60}
          className="h-10 w-auto"
        />
      </Link>
    </div>

    <nav className="hidden md:flex items-center space-x-8">
      <Link
        to="/"
        className="text-[#18191f] hover:text-[#4caf4f] transition-colors"
      >
        Home
      </Link>
      <Link
        to="/planner"
        className="text-[#18191f] hover:text-[#4caf4f] transition-colors"
      >
        Planner
      </Link>
      <Link
        to="/chat"
        className="text-[#18191f] hover:text-[#4caf4f] transition-colors"
      >
        Friends
      </Link>
      <Link
        to="/offer"
        className="text-[#18191f] hover:text-[#4caf4f] transition-colors"
      >
        Invitations
      </Link>
      <Link
        to="/faq"
        className="text-[#18191f] hover:text-[#4caf4f] transition-colors"
      >
        FAQ
      </Link>
    </nav>

    <div className="flex items-center space-x-4">
      <Link
        to="/landing"
        className="text-[#4caf4f] hover:text-[#3d8c3f] transition-colors"
      >
        Login
      </Link>
      <Link
        to="/signup"
        className="bg-[#4caf4f] text-white px-4 py-2 rounded hover:bg-[#3d8c3f] transition-colors"
      >
        Sign up
      </Link>
    </div>
  </header>
);

export default Header;
