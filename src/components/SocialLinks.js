// src/components/SocialLinks.js
import React from 'react';

const SocialLinks = () => {
  return (
    <section>
      <h2>Connect with Me</h2>
      <ul>
        <li>
          <a href="https://github.com/rohan-charapale" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/rohan-charapale/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        {/* Add more social links as needed */}
      </ul>
    </section>
  );
};

export default SocialLinks;
