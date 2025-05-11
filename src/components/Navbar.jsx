import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex gap-4 p-4 bg-slate-900 shadow text-white">
      <Link to="/" className="text-blue-500 hover:underline">Home</Link>
      <Link to="/about" className="text-blue-500 hover:underline">About</Link>
    </nav>
  );
}