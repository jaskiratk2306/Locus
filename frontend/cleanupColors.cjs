const fs = require('fs');
const path = require('path');

const dir = 'c:/Dev/Geo_Map/frontend/src';

const replacements = {
  'hover:bg-slate-50': 'hover:bg-brand-surface',
  'bg-slate-200': 'bg-brand-dark/10',
  'bg-black/50': 'bg-brand-dark/50'
};

function walkDir(currentPath) {
  const files = fs.readdirSync(currentPath);
  for (const file of files) {
    const fullPath = path.join(currentPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      
      const keys = Object.keys(replacements).sort((a, b) => b.length - a.length);
      
      for (const key of keys) {
        const escapedKey = key.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        const regex = new RegExp(`(?<=[\\s"'\\\`])` + escapedKey + `(?=[\\s"'\\\`])`, 'g');
        content = content.replace(regex, replacements[key]);
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated (cleanup): ${fullPath}`);
      }
    }
  }
}

walkDir(dir);
console.log('Cleanup script finished.');
