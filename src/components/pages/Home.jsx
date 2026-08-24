import DataPage from "./DataPage";
import { projects } from "../../data/site-data";

function Home() {
  return (
    <DataPage
      data={projects}
      basePath="/project"
      pageLabel="Home"
      heading="Projects"
    />
  );
}

export default Home;
