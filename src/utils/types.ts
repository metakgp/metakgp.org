export interface REPO_DATA_TYPE {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  homepage: string;
}

export interface FEATURED_REPO {
  screenshot_img: string;
  usage: string;
  repo: REPO_DATA_TYPE;
}

export interface SortDropdownProps {
   setSortField: (field: string) => void;
  setSortType: (type: "asc" | "desc") => void;
  sortField: string;
  sortType: string;
}