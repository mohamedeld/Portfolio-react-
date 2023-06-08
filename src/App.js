
import './App.css';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import {About} from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
function App() {
  return (
    <>
      <NavBar/>
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
