import './App.css';
import About from './tsx/views/components/block/About';
import Header from './tsx/views/components/block/Header';
import Top from './tsx/views/components/block/Top';

function App() {
  return (
    <div className="App">
     <Header/>
     <Top/>
     <About/>
    </div>
  );
}

export default App;
