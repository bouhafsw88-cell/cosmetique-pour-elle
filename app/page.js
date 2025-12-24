export default function Home() {
  const products = [
    {
      name: "NIVEA Crème Hydratante",
      price: "2900 DA",
      description: "Hydratation intense pour tous types de peau",
    },
    {
      name: "NIVEA Lait Corps",
      price: "3200 DA",
      description: "Peau douce et nourrie toute la journée",
    },
    {
      name: "NIVEA Gel Douche",
      price: "1800 DA",
      description: "Fraîcheur et douceur au quotidien",
    },
  ];

  return (
    <main style={{ padding: 20 }}>
      <h1>Cosmétique Pour Elle 💄</h1>
      <p>Produits NIVEA authentiques – Paiement à la livraison</p>

      <div style={{ display: "grid", gap: 20, marginTop: 30 }}>
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              padding: 15,
              borderRadius: 8,
            }}
          >
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <strong>{product.price}</strong>
            <br />
            <button style={{ marginTop: 10 }}>
              Commander
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
