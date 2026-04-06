function ProjectTiles({ projects, active, setActive }) {
  return (
    <div className="project-tile-container">
      {Object.keys(projects).map((key) => (
        <p
          key={key}
          className={`project-tile ${active === key ? "active" : ""}`}
          onClick={() => setActive(key)}
        >
          {projects[key].title}
        </p>
      ))}
    </div>
  );
}

export default ProjectTiles;
