import TrackVisibility from "react-on-screen";
import "./App.css";
import "animate.css";

function App() {
  return (
    <TrackVisibility>
      <div className="animation">
        <div className="animation__letter animate__animated animate__flipInX">
          A
        </div>
        <div className="animation__letter animate__animated animate__flipInX">
          N
        </div>
        <div className="animation__letter animate__animated animate__flipInX">
          I
        </div>
        <div className="animation__letter animate__animated animate__flipInX">
          M
        </div>
        <div className="animation__letter animate__animated animate__flipInX">
          A
        </div>
        <div className="animation__letter animate__animated animate__flipInX">
          T
        </div>
        <div className="animation__letter animate__animated animate__rotateInUpRight">
          E
        </div>
      </div>
    </TrackVisibility>
  );
}

export default App;
