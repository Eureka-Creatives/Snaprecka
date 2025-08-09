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
    <nav className="flex items-center justify-between rounded-lg px-3 w-full">
      <figure>
        <Link to="/" className="flex items-center space-x-1">
          <img src={Logo} alt="Snaprecka Logo" className="h-6 w-auto" />
          <span className="text-base font-semibold">Angles</span>
        </Link>
      </figure>
      <ul className="flex bg-white px-8 py-3 space-x-8 rounded-full">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link to={link.href} className="text-gray-700 text-sm">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <Button className="rounded-full h-9">Sign Up</Button>
    </nav>
  );
}
