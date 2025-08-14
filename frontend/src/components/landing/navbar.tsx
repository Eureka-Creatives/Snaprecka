import { Link } from "react-router";
import { Button } from "../ui/button";
import Logo from "../../assets/landing/logo.svg"; // Assuming you have a logo asset
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Teams", href: "/teams" },
];
export default function Navbar() {
  return (
    <nav className="flex font-dm items-center justify-center gap-20 rounded-full mt-10 bg-black/40 backdrop-blur-sm px-4 py-1.5">
      <figure>
        <Link to="/" className="flex items-center space-x-1">
          <img src={Logo} alt="Snaprecka Logo" className="h-7 w-6" />
          <span className="text-sm text-white font-semibold">angles</span>
        </Link>
      </figure>
      <ul className="flex px-8 py-3 space-x-8 rounded-full">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link to={link.href} className="text-white text-sm font-medium">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <Button className="rounded-full hover:bg-white h-9.5 px-8 bg-white text-sm font-bold text-black">
        Sign Up
      </Button>
    </nav>
  );
}
