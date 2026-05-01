function ProjectTiles({ projects, active, setActive }) {
  // dont map if undefined (during dev)
  if (!projects) {
    console.warn("ProjectTiles received no data");
    return null;
  }
  return (
    <div className="project-tile-container">
      {Object.keys(projects).map((key) => (
        <p
        tabIndex="0"
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
