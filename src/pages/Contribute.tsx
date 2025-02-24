import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../styles/contribute.css";

const ContributePage = () => {
  return (
    <div className="contribution-container">
      <h1 className="title">🚀 Contributing to metaKGP</h1>
      <p className="subtitle">Join us in improving open knowledge at IIT KGP!</p>

      {/* Join Community */}
      <section className="section">
        <h2 className="section-title">🌍 Join the Community</h2>
        <p>Connect with developers and contributors in our Discord, Telegram, or mailing lists.</p>
      </section>

      {/* Pick a Project */}
      <section className="section">
        <h2 className="section-title">🔍 Pick a Project</h2>
        <p>Explore our repositories on GitHub and find a project that interests you.</p>
      </section>

      {/* Try it Out */}
      <section className="section">
        <h2 className="section-title">🛠 Try it Out</h2>
        <p>Clone the repo and set up the project locally.</p>
        <SyntaxHighlighter language="bash" style={dracula}>
          {`git clone https://github.com/metakgp/<repo-name>.git
cd <repo-name>
npm install
npm start`}
        </SyntaxHighlighter>
      </section>

      {/* Read the Docs */}
      <section className="section">
        <h2 className="section-title">📖 Read the Docs</h2>
        <p>Check the project's documentation to understand its structure and dependencies.</p>
      </section>

      {/* Explore the Codebase */}
      <section className="section">
        <h2 className="section-title">🔎 Explore the Codebase</h2>
        <p>Browse the source code to understand how it works.</p>
      </section>

      {/* Issues */}
      <section className="section">
        <h2 className="section-title">🐛 Issues</h2>
        <p>Find beginner-friendly issues labeled as <code>good first issue</code>.</p>
      </section>

      {/* Fork, Branch, PR */}
      <section className="section">
        <h2 className="section-title">🔄 Fork → Branch → PR</h2>
        <SyntaxHighlighter language="bash" style={dracula}>
          {`# Fork the repository
git clone https://github.com/your-username/<repo-name>.git
cd <repo-name>

# Create a new branch
git checkout -b feature-branch

# Make changes, commit, and push
git add .
git commit -m "Added a new feature"
git push origin feature-branch

# Open a Pull Request on GitHub`}
        </SyntaxHighlighter>
      </section>

      {/* Testing */}
      <section className="section">
        <h2 className="section-title">🧪 Test Your Changes</h2>
        <p>Run tests before submitting your PR.</p>
        <SyntaxHighlighter language="bash" style={dracula}>
          {`npm test`}
        </SyntaxHighlighter>
      </section>

      {/* Communication */}
      <section className="section">
        <h2 className="section-title">📢 Communicate</h2>
        <p>Engage with the community and maintainers for guidance.</p>
      </section>
    </div>
  );
};

export default ContributePage;
