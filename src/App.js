import { About, Footer, Header, Projects, Skills, Contact} from './container';
import './App.scss'
const App = () => {



  return (
    <div className="app" id="Home">
        <Header />
        <About />
        <Projects />
        <Skills />
        <Contact/>
        <Footer />
    </div>
  );
}

export default App;
