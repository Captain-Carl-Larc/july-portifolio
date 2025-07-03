function About() {
    return ( 
        <section id="about" className="bg-blue-700">
            <div className="p-8 text-container text-center">
                <h1 className="py-2 font-bold text-white text-3xl md:text-5xl">
                    About Me
                </h1>
                <p className="mt-4 text-white text-lg md:text-xl">
                    I am a Full Stack Developer with a passion for building web applications.
                    I love working with React, Node.js, and everything in between.
                </p>
                <p className="mt-4 text-white text-lg md:text-xl">
                    My journey in web development started with a curiosity to understand how the web works.
                    Since then, I have honed my skills and built several projects that showcase my abilities.
                </p>
                <p className="mt-4 text-white text-lg md:text-xl">
                    When I'm not coding, you can find me exploring new technologies, reading tech blogs,
                    or contributing to open source projects. I believe in continuous learning and always strive to improve myskills.
                </p>
                <div id="social-media-cont">
                    <ul>
                        <li>
                            <a href="">Facebook</a>
                        </li>
                        <li>
                            <a href="">Twitter</a>
                        </li>
                        <li>
                            <a href="">LinkedIn</a>
                        </li>
                        <li>
                            <a href="">GitHub</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
     );
}

export default About;

