export default function SkillSection({ reference }) {
  return (
    <div className="skill-section" id="skill" ref={reference}>
      <h1>What I can do</h1>
      <div className="skills-row">
        <div className="skill">
          <img
            className="skill-icon"
            src="https://cdn-icons-png.flaticon.com/512/11743/11743805.png"
            alt=""
          />
          <span className="skill-title"> Front-End Development </span>
          <div className="skills-stack">
            <button>HTML</button>
            <button>CSS</button>
            <button>JavaScript</button>
            <button>React</button>
          </div>
        </div>
        <div className="skill">
          <img
            className="skill-icon"
            src="	https://img.icons8.com/?size=256&id=GlklFRQrkISw&format=png"
            alt=""
          />
          <span className="skill-title"> Back-End Development </span>
          <div className="skills-stack">
            <button>NodeJS</button>
            <button>MongoDB</button>
          </div>
        </div>
        <div className="skill">
          <img
            className="skill-icon"
            src="	https://cdn-icons-png.flaticon.com/512/5608/5608615.png"
            alt=""
          />
          <span className="skill-title"> Mobile Development </span>
          <div className="skills-stack">
            <button>Flutter</button>
          </div>
        </div>
      </div>
    </div>
  );
}
