import Nav from './components/navbar.jsx';
import Footer from './components/footer';
import './components/home.css';
import Hero from './components/hero.jsx';
import WhatsApp from './components/whatsapp.jsx';
import Charleson from './components/smdash.jsx';
import ServicesPage from './components/service.jsx';

function App() {
  return (
    <div>
      <Nav />
      <section className="hero">
      <Hero/>
      </section>
      <Charleson/>
      
      <WhatsApp/>
      <Footer />
    </div>
  );
}

export default App;