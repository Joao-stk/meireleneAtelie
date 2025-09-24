import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-rose-50 to-rose-100 shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-yellow-950">Meirelene Ateliê</h1>
      
      <nav className="flex gap-3">
        <Link to="/">
          <button className="bg-rose-300 text-yellow-950 font-semibold px-4 py-2 rounded-lg shadow hover:bg-pink-100 hover:scale-105 transition transform">
            Home
          </button>
        </Link>

        <Link to="/about">
          <button className="bg-rose-300 text-yellow-950 font-semibold px-4 py-2 rounded-lg shadow hover:bg-pink-100 hover:scale-105 transition transform">
            Sobre
          </button>
        </Link>

        <Link to="/contact">
          <button className="bg-rose-300 text-yellow-950 font-semibold px-4 py-2 rounded-lg shadow hover:bg-pink-100 hover:scale-105 transition transform">
            Contato
          </button>
        </Link>
      </nav>
    </header>
  );
}
