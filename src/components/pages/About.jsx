import DataPage from "./DataPage";
import { strengths } from "../../data/site-data";

function About() {
  return <DataPage data={strengths} defaultActiveKey="leadership" pageLabel="About" />;
}

export default About;
