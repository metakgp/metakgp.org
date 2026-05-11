import { useEffect, useState } from "react";
import CardGrid from "../sections/CardGrid";
import "../styles/pages/Projects.css";
import { REPO_DATA_TYPE } from "../utils/types";
import RepoData from '../data/repo_data.json';
import SortDropdown from "../components/SortDropdown";
import PaginatedCardGrid from "../sections/CardGrid";

const Projects = () => {
  const repoList: REPO_DATA_TYPE[] = RepoData as REPO_DATA_TYPE[]
  const [sortField, setSortField] = useState("stars");
  const [sortType, setSortType] = useState("desc")
  const languages = [...new Set(repoList.map(repo => repo.language).flat())].filter(lang => lang !== null).sort();
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<REPO_DATA_TYPE[]>(repoList);

  useEffect(() => {
    let result = repoList.filter((repo) =>
      selectedLanguages.length === 0 || repo.language.some(lang => selectedLanguages.includes(lang))
    );

    if (sortField === "name") {
      result.sort((a, b) => {
        const cmp = a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        return sortType === "asc" ? cmp : -cmp;
      });
    }
    else if (sortField === "stars") {
      result.sort((a, b) => {
        const cmp = a.stars - b.stars;
        return sortType === "asc" ? cmp : -cmp;
      });
    }
    else if (sortField === "forks") {
      result.sort((a, b) => {
        const cmp = a.forks - b.forks;
        return sortType === "asc" ? cmp : -cmp;
      });

    }
    else if (sortField === "activity") {
      if (sortType === "asc") {
        result = result.reverse();
      }


    }
    setFilteredRepos(result)

  }, [selectedLanguages, sortField, sortType])




  const toggleLanguage = (lang: string) => {
    setSelectedLanguages(prev => {
      if (prev.includes(lang)) {
        const newSelection = prev.filter(l => l !== lang);
        return newSelection;
      } else {
        return [...prev, lang];
      }
    });
  };

  return (
    <div className="page-container">
      <section className="topic-section">
        <h2 className="section-header-left">Our Github Repositories</h2>
        <p className="description">
          Explore our repositories for projects that may help you, feel free to contribute to which ever ones suit you!
        </p>
      </section>
      <div className="filter-container">
        <div className="language-filter">
          {languages.map(lang => (
            <button
              key={lang}
              className={`filter-button ${selectedLanguages.includes(lang) ? "active" : ""}`}
              onClick={() => toggleLanguage(lang)}
              aria-pressed={selectedLanguages.includes(lang)}
            >
              {lang}
            </button>
          ))}

        </div>

        <SortDropdown
          setSortField={setSortField}
          setSortType={setSortType}
          sortField={sortField}
          sortType={sortType}
        />

      </div>
      <PaginatedCardGrid repos={filteredRepos} displayMode="all" />
    </div>
  )
}

export default Projects;
