import ProductCard from "./ProductCard";

const products = [
  {
    name: "Peace Lily",
    price: "$25",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
  },

  {
    name: "Snake Plant",
    price: "$20",
    img: "https://images.unsplash.com/photo-1512428813834-c702c7702b78"
  },

  {
    name: "Cactus",
    price: "$15",
    img: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a"
  },

  {
    name: "Aloe Vera",
    price: "$18",
    img: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735"
  },

  {
    name: "Monstera",
    price: "$28",
    img: "https://images.unsplash.com/photo-1525498128493-380d1990a112"
  },

  {
    name: "Rubber Plant",
    price: "$30",
    img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411"
  }
];

function Products() {
  return (
   <section className="products" id="plants">
      <h2>Top Selling Plants</h2>

      <div className="product-grid">
        {products.map((item, index) => (
          <ProductCard
            key={index}
            img={item.img}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;