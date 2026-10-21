
import FinalSurprise from "./components/FinalSurprise";import Song from "./components/Song";
import Story from "./components/Story";
import LoveLetter from "./components/LoveLetter";
import { useState } from "react";
import Opening from "./components/Opening";
import Hero from "./components/Hero";
import Memories from "./components/Memories";

function App() {
  const [started, setStarted] = useState(false);

  return (
    <>
      {!started ? (
        <Opening onOpen={() => setStarted(true)} />
      ) : (
       <>
  <Hero />
  <Memories />
  <LoveLetter />
  <Story />
  <Song />
  <FinalSurprise />
</>
      )}
    </>
  );
}

export default App;