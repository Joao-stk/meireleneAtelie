import React, { useState, useEffect } from "react";
import Banner from "../components/banner";
import Loader from "../components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    // Simula carregamento (ex: buscar produtos do Firebase/JSON)
    const timer = setTimeout(() => {
      setProdutos([
        { id: 1, nome: "Colar de Pérolas", preco: "R$ 59,90" },
        { id: 2, nome: "Brinco Florido", preco: "R$ 29,90" },
        { id: 3, nome: "Pulseira de Miçangas", preco: "R$ 19,90" },
      ]);
      setLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />; // mostra tela de carregamento
  }

  return (
    <section>
      <Banner />
    </section>
  );
}
