import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardGrid from './components/CardGrid';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container my-5">
        <CardGrid />
      </div>
      <div className="container my-5">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
