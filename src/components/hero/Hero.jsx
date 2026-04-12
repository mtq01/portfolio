function Hero({ project }) {
  // destructuring
  const { title, heroImg, caption, stackIcon, projectLinks, contributors } =
    project;

  return (
    <section className="hero border-radius box-shadow hero-overlay">
      <img src={heroImg} alt={title} className="hero-img" />

      {/* render IF they exist: contributors: top right corner */}
      {contributors && (
        <div className="hero-contributors">
          <span>Team:</span>
          {contributors.map((contributor, i) => (
            <a
              key={i}
              className="contributor-tag"
              href={contributor.url}
              target="_blank"
              rel="noreferrer"
            >
              {contributor.name}
            </a>
          ))}
        </div>
      )}
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-caption">{caption}</p>
        <div className="tech-stack-container">
          {/* render stack icons IF they exist */}
          {stackIcon && (
            <ul className="tech-stack">
              {stackIcon.map((icon, i) => (
                <li key={i} className="stack-icon">
                  <img src={icon.src} alt={icon.alt} />
                </li>
              ))}
            </ul>
          )}
          {/* render project links IF they exist */}
          {projectLinks && (
            <div className="project-info">
              <a
                className="project-links"
                href={projectLinks[0].url}
                target="_blank"
              >
                <img
                  className="project-links-icon"
                  src={projectLinks[0].src}
                  alt={projectLinks[0].alt}
                />
                Repo
              </a>
              <a
                className="project-links"
                href={projectLinks[1].url}
                target="_blank"
              >
                <img
                  className="project-links-icon"
                  src={projectLinks[1].src}
                  alt={projectLinks[1].alt}
                />
                Live
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
