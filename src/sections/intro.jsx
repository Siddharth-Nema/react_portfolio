function scrollFunction(ref) {
  ref.current.scrollIntoView({ behavior: 'smooth' });
}

export default function Intro({ projectRef, skillRef }) {
  return (
    <div className="intro">
      <span className="greeting">
        <span id="typed-element">Hi, I am Siddharth</span>
      </span>
      <span className="title">
        <span id="typed-element2">Full-Stack Developer</span>
      </span>
      <div className="navigation">
        <a
          onClick={() => {
            scrollFunction(skillRef);
          }}
        >
          Skills
        </a>
        <a
          onClick={() => {
            scrollFunction(projectRef);
          }}
        >
          Projects
        </a>
        <a href="mailto:siddharthnema2308@gmail.com">Contact</a>
      </div>
    </div>
  );
}
