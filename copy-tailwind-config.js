const fs = require('fs');
const path = require('path');

const sourceConfig = path.resolve(__dirname, 'tailwind.config.js');
const destConfig = path.resolve(__dirname, 'dist/components/tailwind.config.js');

fs.copyFileSync(sourceConfig, destConfig);
console.log('tailwind.config.js copied to dist/components');
