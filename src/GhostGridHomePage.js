
import React from 'react';

export default function GhostGridHomePage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '3rem', color: '#00ffff' }}>GhostGrid Cybersecurity</h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px' }}>
        Protecting small businesses from digital threats through penetration testing, vulnerability assessments, and employee security training.
      </p>
      <div style={{ marginTop: '2rem' }}>
        <h2>Our Services</h2>
        <ul>
          <li>🔐 Vulnerability Assessments</li>
          <li>🛡️ Penetration Testing</li>
          <li>📚 Security Awareness Training</li>
        </ul>
      </div>
      <div style={{ marginTop: '2rem' }}>
        <h3>Contact Us</h3>
        <p>Email: <a href="mailto:collin98@my.canisius.edu" style={{ color: '#00ffff' }}>collin98@my.canisius.edu</a></p>
      </div>
    </div>
  );
}
