function Hero({ project }) {
  // destructuring
  const { title, heroImg, caption, stackIcon, projectLinks } = project;

  return (
    <section className="hero border-radius box-shadow hero-overlay">
      <img src={heroImg} alt={title} className="hero-img" />

      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-caption">{caption}</p>
        <div className="tech-stack-container">
          <ul className="tech-stack">
            {stackIcon.map((icon, i) => (
              <li key={i} className="stack-icon">
                <img src={icon.src} alt={icon.alt} />
              </li>
            ))}
          </ul>
          <div className="project-info">
            <a className="project-links" href={projectLinks[0].url} target="_blank">
              <img className="project-links-icon" src={projectLinks[0].src} alt={projectLinks[0].alt} />
               Repo
            </a>
            <a className="project-links" href={projectLinks[1].url} target="_blank">
              <img className="project-links-icon" src={projectLinks[1].src} alt={projectLinks[1].alt} />
               Live
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
