import RepoCard from "../components/GithubCard";
import CardGrid from "../sections/CardGrid";

const Projects = () => {
  return (
    <div className="page-container">
      <CardGrid names={["chillzone", "iqps-go", "metakgp.org", "naarad", "wimp", "gyft", "Dynac"]} displayMode="all" />
    </div>
  )
}

export default Projects;
