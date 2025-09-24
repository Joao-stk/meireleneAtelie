export default function productCard({ image, name, price }) {
  return (
    <div className="card bg-white rounded-2xl shadow-md p-4 hover:scale-105 transition">
      <img src={image} alt={name} className="rounded-lg w-full h-40 object-cover" />
      <h3 className="mt-2 font-semibold text-lg">{name}</h3>
      <p className="text-pink-500 font-bold">{price}</p>
    </div>
  );
}
