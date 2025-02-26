import { StatsCard } from "../components/StatsCard"
import { FaCode } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import "../styles/sections/Statistics.css";

export const StatsSection = () => {
  return (
    <div className="stats-container">
      <StatsCard cardDescription="projects" cardIcon={<FaProjectDiagram />} cardStat={"60+"} />
      <StatsCard cardDescription="lines of code" cardIcon={<FaCode />} cardStat={"1M+"} />
      <StatsCard cardDescription="contributors" cardIcon={<FaPeopleGroup />} cardStat={"30+"} />
    </div>
  )
}
