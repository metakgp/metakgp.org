import { useState } from "react";
import CardGrid from "../sections/CardGrid";
import "../styles/pages/Projects.css";
import { REPO_DATA_TYPE } from "../utils/types";
import RepoData from '../data/repo_data.json';

const Projects = () => {
  const repoList: REPO_DATA_TYPE[] = RepoData as REPO_DATA_TYPE[]

  const languages = [...new Set(repoList.map(repo => repo.language))];
  const [selectedLanguage, setSelectedLanguage] = useState<string[]>([]);


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

  const filteredRepos = repoList.filter(repo => {
    if (selectedLanguage.length === 0)
      return true;
    return selectedLanguage.includes(repo.language);
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
      <CardGrid repos={filteredRepos} displayMode="all" />
    </div>
  )
}

export default Projects;
