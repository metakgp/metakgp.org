import React, { useState } from "react";
import RepoCard from "../components/GithubCard";
import "../styles/sections/CardGrid.css"
import { REPO_DATA_TYPE } from "../utils/types";
import ReactPaginate from "react-paginate";

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

const PaginatedCardGrid = (props: Props) => {
  const itemsPerPage = 15;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = props.repos.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(props.repos.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % props.repos.length;
    setItemOffset(newOffset);
  }

  return (
    <>
      <CardGrid repos={currentItems} displayMode={props.displayMode} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< prev"
        renderOnZeroPageCount={null}
        activeClassName='pagination-active'
        breakClassName='pagination-break'
        containerClassName='pagination-container'
        nextClassName='pagination-next-prev'
        pageClassName='pagination-page'
        previousClassName='pagination-next-prev'
      />
    </>
  )
}

export default PaginatedCardGrid;
