const fs = require('fs');

const vehicleSolutionsSvg = `<svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="vs-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563eb" />
      <stop offset="100%" stop-color="#1e3a8a" />
    </linearGradient>
  </defs>
  <rect width="400" height="400" fill="white" />
  
  <!-- Abstract Gear/Wheel -->
  <circle cx="200" cy="170" r="90" fill="none" stroke="url(#vs-grad)" stroke-width="24" stroke-dasharray="30 15" />
  <circle cx="200" cy="170" r="50" fill="url(#vs-grad)" />
  
  <text x="200" y="320" font-family="Arial, sans-serif" font-weight="bold" font-size="32" fill="#1e3a8a" text-anchor="middle" letter-spacing="2">VEHICLE SOLUTIONS</text>
  <text x="200" y="355" font-family="Arial, sans-serif" font-size="16" fill="#64748b" text-anchor="middle" letter-spacing="4">PARTS &amp; SERVICES</text>
</svg>`;

const dailyBazarSvg = `<svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="db-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#16a34a" />
      <stop offset="100%" stop-color="#15803d" />
    </linearGradient>
  </defs>
  <rect width="400" height="400" fill="white" />
  
  <!-- Abstract Shopping Bag -->
  <path d="M140 160 L260 160 L280 260 L120 260 Z" fill="url(#db-grad)" />
  <path d="M160 160 C160 100, 240 100, 240 160" fill="none" stroke="#ea580c" stroke-width="16" stroke-linecap="round" />
  <circle cx="200" cy="210" r="25" fill="white" />
  
  <text x="200" y="330" font-family="Arial, sans-serif" font-weight="bold" font-size="36" fill="#15803d" text-anchor="middle" letter-spacing="1">Daily Bazar</text>
  <text x="200" y="360" font-family="Arial, sans-serif" font-size="16" fill="#ea580c" text-anchor="middle" letter-spacing="3">FRESH &amp; FAST</text>
</svg>`;

fs.writeFileSync('public/logos/vehicle_solutions.svg', vehicleSolutionsSvg);
fs.writeFileSync('public/logos/daily_bazar.svg', dailyBazarSvg);
console.log('SVG logos generated!');
