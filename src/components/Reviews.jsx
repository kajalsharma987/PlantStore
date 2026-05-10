import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Kajal",
    text: "Amazing quality plants and beautiful packaging."
  },

  {
    name: "Kittu",
    text: "Delivery was super fast and plants were healthy."
  },

  {
    name: "Kartik",
    text: "Best plant store UI experience I have seen."
  }
];

function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <h2>Customer Reviews</h2>

      <div className="review-container">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p>{review.text}</p>

            <h4>- {review.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;