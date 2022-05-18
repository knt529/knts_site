import './App.css';
import About from './tsx/views/components/block/About';
import Contact from './tsx/views/components/block/Contact';
import Footer from './tsx/views/components/block/Footer';
import Header from './tsx/views/components/block/Header';
import Skill from './tsx/views/components/block/Skill';
import Top from './tsx/views/components/block/Top';
import Wark from './tsx/views/components/block/Wark';


function App() {
  return (
    <div className="App">
     <Header/>
     <Top/>
     <About/>
     <Skill/>
     <Wark/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
