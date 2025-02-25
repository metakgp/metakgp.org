import { useEffect, useState } from "react";
import RepoCard from "../components/GithubCard";
import CardGrid from "../sections/CardGrid";
import useCache from "../hooks/Cache";

const Projects = () => {
  const [repoList, setRepoList] = useState<string[]>([]);
  const { data, isCached, setCache } = useCache("repo_list", 60 * 60 * 60 * 1000);

  const fetchData = () => {
    fetch(`https://api.github.com/orgs/metakgp/repos?sort=updated&per_page=3`)
      .then(res => res.json())
      .then(data => {
        const repoNames = data.map((repo: any) => repo.name);
        setRepoList(repoNames);
        setCache(repoList);
      })
  };

  useEffect(() => {
    if (isCached) {
      setRepoList(data!);
    } else {
      fetchData();
    }
  })

  return (
    <div className="page-container">
      <CardGrid names={repoList} displayMode="all" />
    </div>
  )
}

export default Projects;
