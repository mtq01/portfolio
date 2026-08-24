function ProjectTiles({ projects, active, setActive }) {
  // dont map if undefined (during dev)
  if (!projects) {
    console.warn("ProjectTiles received no data");
    return null;
  }
  return (
    <div className="project-tile-container">
      {Object.keys(projects).map((key) => (
        <button
          type="button"
          key={key}
          className={`project-tile ${active === key ? "active" : ""}`}
          onClick={() => setActive(key)}
          aria-pressed={active === key}
        >
          {projects[key].title}
        </button>
      ))}
    </div>
  );
}

export default ProjectTiles;
