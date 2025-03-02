import React from "react";
import RepoCard from "../components/GithubCard";
import "../styles/sections/CardGrid.css"
import { REPO_DATA_TYPE } from "../utils/types";

type Props = {
  repos: REPO_DATA_TYPE[];
  displayMode: "all" | "featured";
}

const CardGrid = (props: Props) => {
  return (
    <div className={`gh-card-grid ${props.displayMode}`}>
      {props.repos.map((repo, index) => (
        <RepoCard repoData={repo} key={index} />
      ))}
    </div>
  )
}

export default CardGrid;
