function Hero({ project }) {
    // destructuring
    const { title, heroImg, caption } = project;
    
    return (
        <section className="hero border-radius box-shadow overlay">
          <img src={heroImg} alt={title} className="hero-img" />

          <div className="hero-text">
            <h1 className="hero-title">{title}</h1>
            <p className="hero-caption">{caption}</p>
          </div>
        </section>
    );
}

export default Hero;
