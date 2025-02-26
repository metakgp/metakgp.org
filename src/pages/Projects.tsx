import { useContext, useEffect, useState } from "react";
import RepoCard from "../components/GithubCard";
import CardGrid from "../sections/CardGrid";
import useCache from "../hooks/Cache";
import { dummyRepoList } from "../utils/dummyData";

interface RepoData {
  description: string;
  language: string;
  stars: number;
  forks: number;
}

const Projects = () => {
  const [repoList, setRepoList] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");
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

  const fetchDummyData = () => {
    const data = JSON.parse(dummyRepoList)
    setCache(data);
    setRepoList(data)
  }

  useEffect(() => {
    if (isCached) {
      setRepoList(data!);
    } else {
      // fetchData();
      fetchDummyData();
    }
  }, [isCached]);

  useEffect(() => {
    const repoData = repoList
      .map(name => JSON.parse(localStorage.getItem(`${name}_data`)!))
      .filter(Boolean);

    const allLanguages = [...new Set(repoData.map(repo => repo.language).filter(Boolean))];

    setLanguages([...allLanguages]);
  }, [repoList]);

  const filteredRepos = repoList.filter(name => {
    const repoData: RepoData = JSON.parse(localStorage.getItem(`${name}_data`)!);
    return selectedLanguage === "" || repoData.language === selectedLanguage;
  })

  return (
    <div className="page-container">
      <select onChange={(e) => setSelectedLanguage(e.target.value)} value={selectedLanguage}>
        {languages.map(lang => (
          <option key={lang} value={lang}>{lang}</option>
        ))}
      </select>
      <CardGrid names={filteredRepos} displayMode="all" />
    </div>
  )
}

export default Projects;
