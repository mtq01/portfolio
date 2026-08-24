import DataPage from "./DataPage";
import { projects } from "../../data/site-data";

function Home() {
  return <DataPage data={projects} defaultActiveKey="cinemax" pageLabel="Home" />;
}

export default Home;
