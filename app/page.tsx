import React from 'react';

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
};

const Hero = () => <section>Hero Section</section>;
const Services = () => <section>Services Section</section>;
const About = () => <section>About Section</section>;
const WhyChooseUs = () => <section>Why Choose Us Section</section>;
const Contact = () => <section>Contact Section</section>;
const Footer = () => <footer>Footer Section</footer>;

export default LandingPage;