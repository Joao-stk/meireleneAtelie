import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-rose-50 to-rose-100 text-center md:text-left py-10 px-6 mt-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Coluna 1 */}
        <div>
          <h3 className="font-bold text-yellow-950 text-lg mb-2">Meirelene Ateliê</h3>
          <p className="text-yellow-950">
            Produtos feitos à mão com carinho e dedicação.
          </p>
        </div>

        {/* Coluna 2 */}
        <div>
          <h3 className="font-bold text-yellow-950 text-lg mb-2">Contato</h3>
          <p className="text-yellow-950">contato@meireleneatelie.com</p>
          <p className="text-yellow-950">(16) 99608-3425</p>
          <p className="text-yellow-950">Ribeirão Preto - SP</p>
        </div>

        {/* Coluna 3 */}
        <div>
          <h3 className="font-bold text-yellow-950 text-lg mb-2">Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:underline text-yellow-950">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline text-yellow-950">
                Fale Conosco
              </Link>
            </li>
            <li>
              <a
                href="https://instagram.com/meireleneatelie"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-yellow-950"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="text-center border-t border-pink-300 mt-6 pt-4 text-sm text-yellow-950">
        © 2025 Meirelene Ateliê — Todos os direitos reservados
      </div>
    </footer>
  );
}
