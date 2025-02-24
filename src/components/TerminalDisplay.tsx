import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js/lib/core';
import shell from 'highlight.js/lib/languages/shell';
import 'highlight.js/styles/tomorrow-night-bright.css';
import "../styles/components/TerminalDisplay.css";

hljs.registerLanguage('shell', shell);

interface TerminalDisplayProps {
  command: string;
}

const TerminalDisplay: React.FC<TerminalDisplayProps> = ({ command }) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, []);

  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <span className="terminal-button"></span>
        <span className="terminal-button"></span>
        <span className="terminal-button"></span>
        <span className="terminal-tab">Terminal</span>
      </div>
      <div className="terminal-body">
        <pre>
          <code ref={codeRef} className="language-shell">
            {command}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default TerminalDisplay;
