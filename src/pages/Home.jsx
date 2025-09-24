import Banner from "../components/banner";
export default function Home() {
  const produtos = [
    { id: 1, nome: "Colar de Pérolas", preco: "R$ 59,90" },
    { id: 2, nome: "Brinco Florido", preco: "R$ 29,90" },
    { id: 3, nome: "Pulseira de Miçangas", preco: "R$ 19,90" },
  ];

  return (
    <section>
      <Banner />
        <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {produtos.map((produto) => (
            <div key={produto.id} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
              <div className="h-40 bg-pink-100 rounded mb-4 flex items-center justify-center">
                <span className="text-pink-500 font-bold">Imagem</span>
              </div>
              <h3 className="font-semibold text-yellow-950 mb-2">{produto.nome}</h3>
              <p className="text-yellow-950">{produto.preco}</p>
              <button className="mt-4 w-full bg-yellow-950 text-white py-2 rounded-lg hover:bg-yellow-900 transition">
                Comprar
              </button>
            </div>
          ))}
        </div>
    </section>
  );
}
