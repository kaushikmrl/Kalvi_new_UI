import './App.css';
import Download from './components/Download';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Search from './components/search1';


function App() {
  return (
    <div className="App text-white overflow-hidden">
        <Header/>
        <Hero/>
        <Experience/>
        <Search/>
        <Download/>
        <Footer/>
    </div>
  )
}

export default App;
