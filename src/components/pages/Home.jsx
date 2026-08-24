import DataPage from "./DataPage";
import { projects } from "../../data/site-data";

function Home() {
  return (
    <DataPage
      data={projects}
      indexPath="/"
      detailPath="/project"
      pageLabel="Home"
      heading="Projects"
    />
  );
}

export default Home;
