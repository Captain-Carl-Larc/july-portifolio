function Hero() {
  const heroImage = (
    <img
      src="https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg"
      alt="Placeholder banner image"
    />
  );
  return (
    <section className="bg-gray-800 h-96  md:h-screen">
        <div className="text-container">
            Text comes here
        </div>
        <div className="image-cont">
            IMage comes here
        </div>
    </section>
  );
}

export default Hero;
