import React from "react";
import RepoCard from "../components/GithubCard";

type Props = {
  names: string[];
  displayMode: "all" | "featured";
}

const CardGrid = (props: Props) => {
  return (
    <div className="gh-card-grid">
      {props.names.map((name, index) => (
        <RepoCard repoName={name} key={index} />
      ))}
    </div>
  )
}
