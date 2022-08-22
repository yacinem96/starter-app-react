
import './App.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import {Footer } from './components/Footer';
import {About } from './components/About';
import {Team } from './components/Team';
function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <About/>
     <Team/>
     <Footer/>

    </div>
  );
}

export default App;
