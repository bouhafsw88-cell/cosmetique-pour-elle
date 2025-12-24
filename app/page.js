"use client";

export default function Home() {
  const products = [
    {
      name: "NIVEA Crème Hydratante",
      description: "Hydratation intense pour tous types de peau",
      price: 2900,
    },
    {
      name: "NIVEA Lait Corps",
      description: "Peau douce et nourrie toute la journée",
      price: 3200,
    },
    {
      name: "NIVEA Gel Douche",
      description: "Fraîcheur et douceur au quotidien",
      price: 1800,
    },
  ];

  return (
    <main style={{ padding: 20 }}>
      <h1>Cosmétique Pour Elle 💄</h1>
      <p>Produits NIVEA authentiques – Paiement à la livraison</p>

      {products.map((product, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #333",
            borderRadius: 8,
            padding: 15,
            marginTop: 20,
          }}
        >
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <strong>{product.price} DA</strong>
          <br />

          <a
            href={
              "https://wa.me/213669980126?text=" +
              encodeURIComponent(
                "Bonjour, je souhaite commander " +
                  product.name +
                  " au prix de " +
                  product.price +
                  " DA"
              )
            }
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: 10,
              padding: "8px 14px",
              backgroundColor: "#555",
              color: "#fff",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Commander
          </a>
        </div>
      ))}
    </main>
  );
}
