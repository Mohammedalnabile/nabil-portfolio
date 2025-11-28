import './App.css';
import { Header, Hero, About, Projects, Contact, Footer } from './components';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;