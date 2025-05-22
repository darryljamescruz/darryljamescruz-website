import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

export default function SubpageLayout() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen animate-fadeIn">
        <Outlet />
      </div>
    </>
  );
}