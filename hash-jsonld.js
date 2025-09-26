const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const file = path.join(__dirname, 'APP', 'frontend', 'public', 'index.html');
const html = fs.readFileSync(file, 'utf8');
const startTag = '<script type="application/ld+json">';
const endTag = '</script>';
const i = html.indexOf(startTag);
if (i === -1) {
  console.error('JSON-LD block not found');
  process.exit(1);
}
const j = html.indexOf(endTag, i + startTag.length);
if (j === -1) {
  console.error('JSON-LD end tag not found');
  process.exit(1);
}
const content = html.slice(i + startTag.length, j);
const base64 = crypto.createHash('sha256').update(content).digest('base64');
console.log('sha256-' + base64);
