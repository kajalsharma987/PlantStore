function ProductCard({ img, name, price }) {
  return (
    <div className="card">
      <img src={img} alt="" />

      <h3>{name}</h3>

      <p>{price}</p>

      <button onClick={() => alert("Plant Added To Cart 🌱")}>
  Add To Cart
</button>
    </div>
  );
}

export default ProductCard;