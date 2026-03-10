import "./main-content.css";

function MainContent() {
  return (
    <main className="site-main">
      <h3>Main Content</h3>

      <section className="main-container">
        <div className="hero">
          <p>hero</p>
        </div>

        <aside className="aside-blocks">
          <div className="info-block">Block</div>
          <div className="info-block">Block</div>
          <div className="info-block">Block</div>
          <div className="info-block">Block</div>
        </aside>
      </section>

      <section className="content-blocks">
        <div className="card-block">Card</div>
        <div className="card-block">Card</div>
        <div className="card-block">Card</div>
      </section>
    </main>
  );
}

export default MainContent;
