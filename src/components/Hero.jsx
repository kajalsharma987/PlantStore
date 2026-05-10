function Hero() {
  return (
   <section className="hero" id="home">
      <div className="hero-left">
        <h1>
          Earth’s <span>Exhale</span>
        </h1>

        <p>
          Bring nature into your home with elegant indoor plants and create a
          fresh healthy atmosphere.
        </p>

        <a href="#plants">
  <button>Explore Plants</button>
</a>
      </div>

      <div className="hero-right">
        <img
          src="https://images.unsplash.com/photo-1485955900006-10f4d324d411"
          alt=""
        />
      </div>
    </section>
  );
}

export default Hero;