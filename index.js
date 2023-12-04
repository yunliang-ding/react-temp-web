const glob = require('glob');

const path = require('path');

const pages = glob.sync(path.resolve(__dirname, `./src/pages/**/*.tsx`));

console.log(pages)

const watch = require('node-watch');
 
watch('./src/pages', { recursive: true }, (evt, name) => {
  console.log('%s changed.', name, evt);
});