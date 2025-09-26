export default function About() {
  const team = [
    {
      name: "Meirelene Zaparoli",
      role: "CEO & Fundadora",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      alt: "Foto de Meirelene Zaparoli",
      description: '"Transformamos memórias em arte sustentável, criando peças únicas que contam histórias."'
    }
  ];

  return (
    <div className="00 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={member.src}
                  alt={member.alt}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-yellow-950 font-medium">{member.role}</p>
                <p className="text-rose-900 mt-2">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden mt-5">
              <div className="aspect-w-4 aspect-h-3">
              </div>
              <div className="p-6 ">
                <p className="text-yellow-950 font-medium text-justify"><strong>Meirelene Zaparoli</strong>, estilista nascida em Bebedouro, descobriu sua paixão muito cedo: aos 6 anos, criou sua primeira peça de roupa. Vinda de uma família onde a profissão passou de geração em geração, cresceu cercada por linhas, agulhas e inspiração.<br></br><br></br>Apaixonada por roupas que carregam significado, decidiu transformar sua vocação em um sonho concreto. Em 2020, abriu o Meirelene Ateliê, um espaço dedicado a criar peças únicas, onde cada tecido ganha vida e se transforma em histórias, emoções e sonhos.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    
  );
}
