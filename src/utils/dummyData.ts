import { dummyData, RepoData } from "./types"

const repoList = ["metakgp.org", "events-board", "iqps-go", "gyft", "mftp", "travel-buddy", "wimp", "society-table", "metakgp-wiki", "chillzone", "heimdall", "odins-wault", "mfins", "naarad", "naarad-ntfy", "metaploy", "slack-invite", "dob", "gyfe", "iitkgp-erp-login-pypi", "kronos", "README.md", "slack-archive", "iitkpg-erp-auto-login", "Dynac", "hermes"]

const languages = ["TypeScript", "Javascript", "Python", "HTML", "Go", "Dockerfile", "Shell", "CSS", "Rust", "PHP"]

let repoData: dummyData = {}

repoList.forEach(repo => {
  const randomData: RepoData = {
    language: languages[Math.floor(Math.random() * (languages.length))],
    description: "Wow a very cool metakgp project!!! I want to contribute to it!!!",
    stars: 420,
    forks: 69
  }
  repoData[`${repo}_data`] = JSON.stringify(randomData);
})

export const dummyRepoList = JSON.stringify(repoList);
export const RepoMap = repoData;
