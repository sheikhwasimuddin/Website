import React, { useState, useEffect, useRef } from "react";
import "./ResearcherTerminal.scss";
import { researcherTerminal } from "../../portfolio";

const COMMANDS = {
  whoami: "Sheikh Wasimuddin — Full Stack Engineer, AI & Cloud Enthusiast 🚀",
  skills:
    "React • Node.js • Python • MongoDB • AWS • Azure • IoT • Power BI • Figma",
  status: "System Online ✅  |  Open for Opportunities: Yes",
  projects:
    "→ Cool City (UHI awareness platform)\n→ MedIoT (AI-powered health monitoring)",
  education:
    "B.Tech CSE (IoT) — YCCE Nagpur (2023–2027)\nCBSE XII: 85.6% | CBSE X: 86.5%",
  contact:
    "📧 sheikhwasimuddin786@gmail.com\n📞 +91-9589154386",
  github: "🔗 https://github.com/sheikhwasimuddin",
  linkedin: "🔗 https://www.linkedin.com/in/sheikhwasimuddin",
  help:
    "Available commands:\n  whoami      →  About me\n  skills      →  Tech stack\n  projects    →  My projects\n  education   →  Academic background\n  contact     →  Get in touch\n  github      →  GitHub profile\n  linkedin    →  LinkedIn profile\n  status      →  Current availability\n  clear       →  Clear terminal",
  clear: "__CLEAR__",
};

const WELCOME = [
  "Welcome to Sheikh Wasimuddin's Research Terminal v1.0",
  "Type 'help' to see available commands.",
  "─────────────────────────────────────────────────────",
];

export default function ResearcherTerminal() {
  const [history, setHistory] = useState(
    WELCOME.map(text => ({ type: "info", text }))
  );
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  if (!researcherTerminal.display) return null;

  const handleSubmit = e => {
    e.preventDefault();
    const trimmed = input.trim().toLowerCase();
    if (!trimmed) return;

    const newEntry = [{ type: "cmd", text: trimmed }];

    if (trimmed === "clear") {
      setHistory(WELCOME.map(text => ({ type: "info", text })));
    } else {
      const response = COMMANDS[trimmed];
      const output = response
        ? { type: "output", text: response }
        : { type: "error", text: `Command not found: '${trimmed}'. Type 'help' for a list of commands.` };
      setHistory(prev => [...prev, ...newEntry, output]);
    }

    setCmdHistory(prev => [trimmed, ...prev]);
    setHistoryIndex(-1);
    setInput("");
  };

  const handleKeyDown = e => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(historyIndex + 1, cmdHistory.length - 1);
      setHistoryIndex(next);
      setInput(cmdHistory[next] || "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = Math.max(historyIndex - 1, -1);
      setHistoryIndex(next);
      setInput(next === -1 ? "" : cmdHistory[next] || "");
    }
  };

  return (
    <div className="researcher-terminal-main" id="terminal">
      <div className="terminal-header">
        <h1 className="terminal-heading">{researcherTerminal.title}</h1>
        <p className="terminal-subheading">
          An interactive terminal — try typing a command below!
        </p>
      </div>
      <div
        className="terminal-window"
        onClick={() => inputRef.current?.focus()}
      >
        <div className="terminal-top-bar">
          <div className="terminal-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="terminal-title">~/research/terminal</div>
        </div>
        <div className="terminal-body">
          {history.map((line, index) => (
            <div key={index} className={`terminal-line ${line.type}`}>
              {line.type === "cmd" ? (
                <span>
                  <span className="prompt">user@researcher-lab:~$</span>{" "}
                  {line.text}
                </span>
              ) : (
                <span className={`output ${line.type}`}>
                  {line.text.split("\n").map((l, i) => (
                    <span key={i}>
                      {l}
                      <br />
                    </span>
                  ))}
                </span>
              )}
            </div>
          ))}

          {/* Input row */}
          <form onSubmit={handleSubmit} className="terminal-input-row">
            <span className="prompt">user@researcher-lab:~$</span>
            <input
              ref={inputRef}
              className="terminal-input"
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              autoComplete="off"
              spellCheck="false"
              aria-label="Terminal input"
            />
          </form>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}
