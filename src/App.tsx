import './App.css';
import About from './tsx/views/components/block/About';
import Contact from './tsx/views/components/block/Contact';
import Header from './tsx/views/components/block/Header';
import Top from './tsx/views/components/block/Top';

function App() {
  return (
    <div className="App">
     <Header/>
     <Top/>
     <About/>
     <Contact/>
    </div>
  );
}

export default App;
