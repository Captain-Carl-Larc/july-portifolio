function Contact() {
  return (
    <section className="bg-blue-800">
      <div className="mx-auto px-4 py-8 lg:py-16 max-w-screen-md">
        <h2 className="mb-4 font-extrabold text-gray-300 text-4xl text-center tracking-tight">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-gray-300 sm:text-xl text-center">
          <span className="font-semibold">
            Got a question or an exciting idea you'd like to discuss? {" "}
          </span> 
          Drop me a line! I'm always open to new connections and opportunities.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-medium text-gray-200 dark:text-gray-300 text-sm"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="block bg-gray-800 shadow-sm dark:shadow-sm-light p-2.5 border border-gray-300 focus:border-primary-500 dark:focus:border-primary-500 rounded-lg focus:ring-primary-500 dark:focus:ring-primary-500 w-full text-white dark:text-white text-sm dark:placeholder-white"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 font-medium text-white text-sm"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block bg-gray-800 shadow-sm dark:shadow-sm-light p-3 border border-gray-300 focus:border-primary-500 dark:border-gray-600 dark:focus:border-primary-500 rounded-lg focus:ring-primary-500 dark:focus:ring-primary-500 w-full text-white text-sm dark:placeholder-white"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 font-medium text-white text-sm"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block bg-gray-800 shadow-sm p-2.5 border border-gray-300 focus:border-primary-500 dark:border-gray-600 dark:focus:border-primary-500 rounded-lg focus:ring-primary-500 dark:focus:ring-primary-500 w-full text-white text-sm dark:placeholder-white"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-orange-400 hover:bg-orange-600 px-5 py-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-orange-300 sm:w-fit font-bold text-white text-sm text-center transition duration-300 cursor-pointer"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
