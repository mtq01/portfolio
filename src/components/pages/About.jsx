import DataPage from "./DataPage";
import { strengths } from "../../data/site-data";

function About() {
  return (
    <DataPage
      data={strengths}
      basePath="/about"
      pageLabel="About"
      heading="Strengths"
    />
  );
}

export default About;
