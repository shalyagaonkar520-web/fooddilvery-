const fs = require('fs');
const path = './src/components/AdminPage.tsx';
let content = fs.readFileSync(path, 'utf8');

// The whole admin page can just be fixed by finding the start of the Drinks Tab and replacing it with empty.
// Since it's a huge component, let's just make the whole Drinks Tab render nothing if the tab is selected.
const start = content.indexOf('{activeTab === "drinks" && (');
if(start !== -1) {
  // Let's replace the whole tab
  const endStr = '          {activeTab === "settings" && (';
  const end = content.indexOf(endStr);
  if(end !== -1) {
    content = content.substring(0, start) + '{activeTab === "drinks" && (<div>Drinks management is currently disabled.</div>)}\n' + content.substring(end);
    fs.writeFileSync(path, content, 'utf8');
    console.log('Fixed drinks tab');
  } else {
    console.log('Could not find end of drinks tab');
  }
}
