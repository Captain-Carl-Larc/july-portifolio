function Hero() {
  const heroImage = (
    <img
      src="https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg"
      alt="Placeholder banner image"
    />
  );
  return (
    <section className="justify-center items-start md:items-center gap-2 grid md:grid-cols-2 md:grid-rows-1 bg-blue-800 px-4 pt-24 md:pt-32 pb-16 md:pb-0 md:h-screen min-h-96">
      <div className="md:mb-0 text-container md:text-left text-center mb:4">
        <h1 className="py-2 font-bold text-gray-200 text-3xl md:text-5xl">
          Hello, I'm <span className="text-gray-300">Stephen Kalwenzi</span>
        </h1>
        <h1 className="my-4 text-gray-300 text-2xl md:text-4xl">
          A Full Stack Developer
        </h1>
          <button className="bg-orange-400 hover:bg-orange-500 px-4 py-2 rounded-lg font-bold text-white transition duration-300 cursor-pointer">
            Get in Touch
          </button>
      </div>
      <div id="visual-container" className="flex justify-center items-center">
        <div className="shadow-lg rounded-xl max-w-md overflow-hidden hero-image-container">
          {heroImage}
        </div>
      </div>
    </section>
  );
}

export default Hero;
