export default function ProjectSection({ reference }) {
  return (
    <div className="project-section" id="project" ref={reference}>
      <h1>Projects</h1>
      <div className="project">
        <img
          className="project-cover"
          src="https://play-lh.googleusercontent.com/NIEO9HLcMTqT1iu_aK7M4UtW4r9rKoztqdhQPZ4Aqx6NScPskFiWqRL-NmKAt7BFyw=w240-h480-rw"
          alt=""
        />
        <div className="project-desc">
          <h2>Anony</h2>
          <p>
            A unique anonymous Q&A app, a platform that allows you to connect
            with your friends and followers in a whole new way. Share your
            personalized link and invite them to ask you anything - all while
            maintaining their anonymity.
          </p>
          <h3>Tech Stack</h3>
          <div className="tech-stack">
            <img
              src="https://img.icons8.com/?size=256&id=hsPbhkOH4FMe&format=png"
              className="tech-stack-item"
              alt="NodeJS"
            />
            <img
              src="	https://img.icons8.com/?size=256&id=7I3BjCqe9rjG&format=png"
              className="tech-stack-item"
              alt="Flutter"
            />
            <img
              src="https://img.icons8.com/?size=256&id=74402&format=png"
              className="tech-stack-item"
              alt="MongoDB"
            />
          </div>
        </div>
      </div>
      <div className="project" id="reverse-view">
        <img
          className="project-cover"
          src="	https://cdn-icons-png.flaticon.com/512/831/831268.png"
          alt=""
        />
        <div className="project-desc">
          <h2>Clima</h2>
          <p>
            Clima is a user-friendly weather application designed to provide
            real-time weather information and forecasts for users worldwide. The
            app aims to offer a seamless and visually appealing experience to
            help users stay informed and make better weather-related decisions.
          </p>
          <h3>Tech Stack</h3>
          <div className="tech-stack" id="reverse-view">
            <img
              src="https://img.icons8.com/?size=256&id=hsPbhkOH4FMe&format=png"
              className="tech-stack-item"
              alt="NodeJS"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/760/760357.png"
              className="tech-stack-item"
              alt="React"
            />
          </div>
        </div>
      </div>
      <div className="project">
        <img
          className="project-cover"
          src="	https://cdn-icons-png.flaticon.com/512/9741/9741158.png"
          alt=""
        />
        <div className="project-desc">
          <h2>To Do</h2>
          <p>
            ToDo is a productivity-focused mobile application designed to help
            users manage their tasks and to-do lists efficiently. This intuitive
            app streamlines task organization, allowing users to stay on top of
            their commitments and accomplish their goals with ease.
          </p>
          <h3>Tech Stack</h3>
          <div className="tech-stack">
            <img
              src="	https://img.icons8.com/?size=256&id=7I3BjCqe9rjG&format=png"
              className="tech-stack-item"
              alt="Flutter"
            />
          </div>
        </div>
      </div>
      <div className="project-outro">
        <h2>Want to see some more?</h2>
        <a href="https://github.com/Siddharth-Nema">
          <button>Checkout my Github</button>
        </a>
      </div>
    </div>
  );
}
