import { createRoot } from "react-dom/client";
import "./styles.css";
import { StrictMode } from "react";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="cv-svartvit.jpg" alt="Moa Arvidsson" />;
}

function Intro() {
  return (
    <div>
      <h2>Moa Arvidsson</h2>
      <p>
        Full-stack web developer. When not coding or preparing a course, I like
        to play board games, to cook (and eat), or just enjoy the Portuguese sun
        at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" color="blue" />
      <Skill skill="HTML + CSS" color="orange" />
      <Skill skill="Java" color="pink" />
      <Skill skill="Python" color="yellow" />
      <Skill skill="Git and Github" color="green" />
      <Skill skill="JavaScript" color="red" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
