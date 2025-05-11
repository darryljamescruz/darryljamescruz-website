import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center gap-12 p-4 bg-[#222831] shadow text-white font-mono">
      <span className="text-lg font-semibold">Darryl James Cruz</span>
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/about" className="hover:underline">About</Link>
      <Link to="/portfolio" className="hover:underline">Portfolio</Link>
    </nav>
  );
}