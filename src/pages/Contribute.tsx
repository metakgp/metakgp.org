import React from "react";
import "../styles/contribute.css";
import TerminalDisplay from "../components/TerminalDisplay";

const command = `$ git clone 'https://github.com/meow.git'
$ echo $SESSION`

const ContributePage = () => {
  return (
    <div className="contribution-container">
      <TerminalDisplay command={command} />
    </div>
  );
};

export default ContributePage;
