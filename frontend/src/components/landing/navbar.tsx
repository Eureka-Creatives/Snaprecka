import { Link } from "react-router";
import { Button } from "../ui/button";
import Logo from "../../assets/landing/logo.svg";
import { useNavigate } from "react-router";
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Teams", href: "/teams" },
];
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="flex font-dm items-center justify-center gap-20 max-md:gap-5 rounded-full mt-10.5 max-md:mt-5 bg-black backdrop-blur-xs shadow-md px-3 max-md:px-2 max-md:py-1 py-1.5">
      <figure>
        <Link to="/">
          <img
            src={Logo}
            alt="Snaprecka Logo"
            className="h-9 w-9 max-md:h-4 max-md:w-4"
          />
        </Link>
      </figure>
      <ul className="flex px-8 max-md:px-3 py-2 space-x-8 max-md:space-x-3 rounded-full">
        {navLinks.map((link) => (
          <li key={link.name} className="group">
            <Link
              to={link.href}
              className="text-white max-md:text-sm font-medium"
            >
              {link.name}
            </Link>
            <span className="block h-[1px] group-hover:w-full bg-white transition-all duration-400 ease-out w-0"></span>
          </li>
        ))}
      </ul>
      <Button
        className="rounded-full cursor-pointer hover:bg-white h-9 px-5 max-md:px-4 bg-white text-sm font-bold text-black active:scale-90 transition-all duration-200"
        onClick={() => {
          setTimeout(() => {
            navigate("/auth/signup");
          }, 1000);
        }}
      >
        Sign up
      </Button>
    </nav>
  );
}
