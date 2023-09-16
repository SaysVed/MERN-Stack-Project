import React from 'react';

import NavBar from '../common/Navbar';
import Footer from '../common/Footer';

const ContactPage = () => {
  return (
    <>
      <NavBar />

      {/* Content */}
      <div className="contact-page min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

        <div className="contact-info text-center">
          <p className="text-lg mb-2">Developer's Name: Vedant Gaidhane</p>
          <p className="text-lg mb-2">Business Name: GeekSquad</p>
          <p className="text-lg">For more updates, follow us on:</p>

          <div className="social-links mt-2">
            <a
              href="https://www.instagram.com/says_ved/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/225px-Instagram_logo_2022.svg.png"
                alt="Instagram"
                className="w-8 h-8"
              />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/YouTube_social_red_square_%282017%29.svg/450px-YouTube_social_red_square_%282017%29.svg.png?20220808215335" 
              alt="YouTube" 
              className="w-8 h-8" 
              />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;
