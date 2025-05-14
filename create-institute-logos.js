const fs = require('fs');
const path = require('path');

// Create directory if it doesn't exist
const directory = 'public/images/institutes';
if (!fs.existsSync(directory)) {
  fs.mkdirSync(directory, { recursive: true });
  console.log(`Created directory: ${directory}`);
}

// List of institute logos to create
const logos = [
  'ems-logo.svg',
  'iabt-logo.svg',
  'bright-logo.svg',
  'bigben-logo.svg',
  'britannia-logo.svg',
  'awesome-logo.svg',
  'sheffield-logo.svg',
  'stratford-logo.svg'
];

// Color palette for logos
const colors = [
  '#1a73e8', // Blue
  '#34a853', // Green
  '#4285f4', // Light blue
  '#ea4335', // Red
  '#fbbc05', // Yellow
  '#ff6d01', // Orange
  '#46bdc6', // Teal
  '#673ab7'  // Purple
];

// Generate each logo
logos.forEach((logo, index) => {
  const name = logo.split('-')[0].toUpperCase();
  const color = colors[index % colors.length];
  
  const svgContent = `
  <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
    <rect width="200" height="200" fill="${color}" opacity="0.2" rx="20" ry="20"/>
    <rect x="10" y="10" width="180" height="180" stroke="${color}" stroke-width="4" fill="none" rx="15" ry="15"/>
    <text x="100" y="110" font-family="Arial, sans-serif" font-size="24" font-weight="bold" 
      text-anchor="middle" fill="${color}">${name}</text>
  </svg>
  `;
  
  const outputPath = path.join(directory, logo);
  fs.writeFileSync(outputPath, svgContent);
  console.log(`Created logo: ${outputPath}`);
});

console.log('All institute logos have been generated!'); 