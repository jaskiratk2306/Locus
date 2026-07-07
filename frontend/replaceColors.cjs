const fs = require('fs');
const path = require('path');

const dir = 'c:/Dev/Geo_Map/frontend/src';

const replacements = {
  // Slate / Gray (Dark Neutral / Bg)
  'text-slate-800': 'text-brand-dark',
  'text-slate-700': 'text-brand-dark',
  'text-slate-600': 'text-brand-dark',
  'text-slate-500': 'text-brand-dark',
  'text-gray-700': 'text-brand-dark',
  'text-gray-900': 'text-brand-dark',
  'bg-slate-50': 'bg-brand-bg',
  'bg-slate-100': 'bg-brand-surface',
  'bg-gray-100': 'bg-brand-bg',
  'bg-gray-900': 'bg-brand-dark',
  'border-slate-100': 'border-brand-dark/10',
  'border-slate-200': 'border-brand-dark/20',
  
  // Whites
  'bg-white': 'bg-brand-surface',
  'text-white': 'text-brand-bg',
  
  // Blues (was primary, now mostly brand-primary or secondary)
  'bg-blue-600': 'bg-brand-primary',
  'bg-blue-700': 'bg-brand-primary hover:bg-brand-secondary', // roughly hover
  'hover:bg-blue-700': 'hover:bg-brand-secondary',
  'hover:bg-blue-400': 'hover:bg-brand-secondary',
  'bg-blue-500': 'bg-brand-secondary',
  'text-blue-600': 'text-brand-primary',
  'hover:text-blue-600': 'hover:text-brand-secondary',
  'text-blue-100': 'text-brand-bg',
  'text-blue-200': 'text-brand-bg',
  'text-blue-50': 'text-brand-bg',
  'bg-blue-100': 'bg-brand-secondary/20',
  'bg-blue-50': 'bg-brand-secondary/20',
  'border-blue-500': 'border-brand-primary',
  'focus:border-blue-500': 'focus:border-brand-primary',
  'focus:ring-blue-500/50': 'focus:ring-brand-primary/50',
  'focus:ring-blue-500': 'focus:ring-brand-primary',
  
  // Greens (some were primary, some success)
  'bg-green-800': 'bg-brand-primary',
  'bg-green-700': 'bg-brand-primary',
  'bg-green-600': 'bg-brand-primary',
  'hover:bg-green-700': 'hover:bg-brand-secondary',
  'hover:bg-green-600': 'hover:bg-brand-secondary',
  'bg-green-50': 'bg-brand-success/20',
  'hover:bg-green-50': 'hover:bg-brand-success/20',
  'text-green-700': 'text-brand-primary',
  'text-green-600': 'text-brand-primary',
  'hover:text-green-600': 'hover:text-brand-secondary',
  'border-green-600': 'border-brand-primary',
  'shadow-green-700/30': 'shadow-brand-primary/30',

  // Ambers (Secondary)
  'bg-amber-100': 'bg-brand-secondary',
  'bg-amber-500': 'bg-brand-secondary',
  'bg-amber-500/80': 'bg-brand-secondary/80',
  'text-amber-600': 'text-brand-secondary',
  'text-amber-100': 'text-brand-bg',
  'text-amber-500': 'text-brand-secondary',
  'shadow-amber-100': 'shadow-brand-secondary',
  'hover:text-amber-500': 'hover:text-brand-secondary',
  
  // Emerald (Success)
  'text-emerald-600': 'text-brand-success',
  'bg-emerald-100': 'bg-brand-success/20',
  
  // Reds (Danger)
  'bg-red-100': 'bg-brand-danger/20',
  'text-red-500': 'text-brand-danger',
  'text-red-700': 'text-brand-danger',
  'border-red-200': 'border-brand-danger'
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
      
      // Sort keys by length descending to replace larger patterns first
      const keys = Object.keys(replacements).sort((a, b) => b.length - a.length);
      
      for (const key of keys) {
        // Use a regex with word boundaries where appropriate, but Tailwind classes often have special chars
        // Escaping key for regex:
        const escapedKey = key.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        // We match the class name with boundaries that apply to CSS classes
        const regex = new RegExp(`(?<=[\\s"'\\\`])` + escapedKey + `(?=[\\s"'\\\`])`, 'g');
        content = content.replace(regex, replacements[key]);
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

walkDir(dir);
console.log('Color replacement script finished.');
