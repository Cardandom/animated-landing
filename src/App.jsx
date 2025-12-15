import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return <div>
    <h1 className="text-xl text-red-600">Habla</h1>
  </div>;
}

export default App;
