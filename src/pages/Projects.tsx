import { useContext, useEffect, useState } from "react";
import RepoCard from "../components/GithubCard";
import CardGrid from "../sections/CardGrid";
import useCache from "../hooks/Cache";
import { dummyRepoList, RepoMap } from "../utils/dummyData";
import "../styles/pages/Projects.css";
import { RepoData } from "../utils/types";

const Projects = () => {
  const [repoList, setRepoList] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string[]>([]);
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
    // setCache(data);
    setRepoList(data)
  }

  useEffect(() => {
    if (isCached) {
      // setRepoList(data!);
      fetchDummyData();
    } else {
      // fetchData();
      fetchDummyData();
    }
  }, [isCached]);

  useEffect(() => {
    const repoData = repoList
      .map(name => JSON.parse(RepoMap[`${name}_data`]));

    const allLanguages = [...new Set(repoData.map(repo => repo.language))];

    setLanguages([...allLanguages]);
  }, [repoList]);

  const toggleLanguage = (lang: string) => {
    setSelectedLanguage(prev => {
      if (prev.includes(lang)) {
        const newSelection = prev.filter(l => l !== lang);
        return newSelection;
      } else {
        return [...prev, lang];
      }
    });
  };

  const filteredRepos = repoList.filter(name => {
    const repoData: RepoData = JSON.parse(RepoMap[`${name}_data`]);
    if (selectedLanguage.length === 0)
      return true;
    return selectedLanguage.includes(repoData.language);
  })

  return (
    <div className="page-container">
      <section className="topic-section">
        <h2 className="section-header-left">Our Github Repositories</h2>
        <p className="description">
          Explore our repositories for projects that may help you, feel free to contribute to which ever ones suit you!
        </p>
      </section>

      <div className="language-filter">
        {languages.map(lang => (
          <button
            key={lang}
            className={`filter-button ${selectedLanguage.includes(lang) ? "active" : ""}`}
            onClick={() => toggleLanguage(lang)}
          >
            {lang}
          </button>
        ))}
      </div>
      <CardGrid names={filteredRepos} displayMode="all" />
    </div>
  )
}

export default Projects;
