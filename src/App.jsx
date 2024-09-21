import Features from "./sections/Features";
import Header from "./sections/Header";
import Hero from "./sections/Hero";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
    </div>
  );
};

export default App;
