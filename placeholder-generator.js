const fs = require('fs');
const path = require('path');

// Create directories if they don't exist
const directories = [
  'public/images/institutes',
];

directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Generate placeholder SVG for institute logos
const instituteLogos = [
  'ems-logo.svg',
  'iabt-logo.svg',
  'bright-logo.svg',
  'bigben-logo.svg',
  'britannia-logo.svg',
  'awesome-logo.svg',
  'sheffield-logo.svg',
  'stratford-logo.svg'
];

const colorPalette = [
  '#1a73e8', // Primary blue
  '#34a853', // Green
  '#4285f4', // Google blue
  '#ea4335', // Google red
  '#fbbc05', // Google yellow
  '#ff6d01', // Orange
  '#46bdc6', // Teal
  '#673ab7'  // Purple
];

instituteLogos.forEach((logo, index) => {
  const color = colorPalette[index % colorPalette.length];
  const name = logo.split('-')[0].toUpperCase();
  
  const svgContent = `
  <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
    <rect width="200" height="200" fill="${color}" opacity="0.2" rx="20" ry="20"/>
    <rect x="10" y="10" width="180" height="180" stroke="${color}" stroke-width="4" fill="none" rx="15" ry="15"/>
    <text x="100" y="110" font-family="Arial, sans-serif" font-size="24" font-weight="bold" 
      text-anchor="middle" fill="${color}">${name}</text>
  </svg>
  `;
  
  const outputPath = path.join('public/images/institutes', logo);
  fs.writeFileSync(outputPath, svgContent);
  console.log(`Created placeholder logo: ${outputPath}`);
});

// Generate placeholder SVG for university images
const universityImages = [
  'iium.jpg',
  'um.jpg',
  'APU.png',
  'malaysian-universities.jpg'
];

universityImages.forEach((image) => {
  const name = image.split('.')[0].toUpperCase();
  const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
  
  const svgContent = `
  <svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${color};stop-opacity:0.7" />
        <stop offset="100%" style="stop-color:${color};stop-opacity:0.3" />
      </linearGradient>
    </defs>
    <rect width="800" height="400" fill="url(#grad)" rx="10" ry="10"/>
    <path d="M 400,80 L 480,200 L 400,320 L 320,200 Z" fill="#fff" opacity="0.2"/>
    <text x="400" y="210" font-family="Arial, sans-serif" font-size="40" font-weight="bold" 
      text-anchor="middle" fill="#fff">${name}</text>
  </svg>
  `;
  
  const outputPath = path.join('public/images', image.replace(/\.(jpg|png)$/, '.svg'));
  fs.writeFileSync(outputPath, svgContent);
  console.log(`Created placeholder university image: ${outputPath}`);
});

// Generate Malaysia cityscape image for the homepage
const malaysiaImage = 'malaysia-cityscape.jpg';
const malaysiaColor = '#1a73e8'; // Use the primary blue

const malaysiaSvgContent = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600" viewBox="0 0 1200 600">
  <defs>
    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#ff7e00;stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:#ffbe0b;stop-opacity:0.5" />
    </linearGradient>
  </defs>
  <rect width="1200" height="600" fill="url(#skyGrad)" />
  
  <!-- Background buildings -->
  <rect x="50" y="200" width="100" height="400" fill="#333" opacity="0.7" />
  <rect x="170" y="250" width="120" height="350" fill="#444" opacity="0.7" />
  <rect x="310" y="180" width="80" height="420" fill="#555" opacity="0.7" />
  <rect x="410" y="280" width="130" height="320" fill="#666" opacity="0.7" />
  <rect x="860" y="220" width="90" height="380" fill="#555" opacity="0.7" />
  <rect x="970" y="270" width="140" height="330" fill="#444" opacity="0.7" />
  <rect x="1130" y="190" width="70" height="410" fill="#333" opacity="0.7" />
  
  <!-- Petronas Towers -->
  <rect x="580" y="150" width="40" height="450" fill="#46bdc6" opacity="0.9" />
  <polygon points="580,150 620,150 600,50" fill="#46bdc6" opacity="0.9" />
  <rect x="660" y="150" width="40" height="450" fill="#46bdc6" opacity="0.9" />
  <polygon points="660,150 700,150 680,50" fill="#46bdc6" opacity="0.9" />
  
  <!-- Bridge between towers -->
  <rect x="620" y="250" width="40" height="20" fill="#46bdc6" opacity="0.9" />
  
  <!-- KL Tower -->
  <rect x="780" y="200" width="20" height="400" fill="#fbbc05" opacity="0.8" />
  <circle cx="790" cy="180" r="30" fill="#fbbc05" opacity="0.8" />
  
  <!-- Text -->
  <text x="600" y="550" font-family="Arial, sans-serif" font-size="36" font-weight="bold" 
    text-anchor="middle" fill="#fff">KUALA LUMPUR</text>
</svg>
`;

const malaysiaOutputPath = path.join('public/images', malaysiaImage.replace(/\.(jpg|png)$/, '.svg'));
fs.writeFileSync(malaysiaOutputPath, malaysiaSvgContent);
console.log(`Created Malaysia cityscape image: ${malaysiaOutputPath}`);

console.log('All placeholder images have been generated!'); 