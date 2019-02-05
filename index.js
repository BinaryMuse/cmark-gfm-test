const cmark = require('cmark-gfm')

cmark.renderHtml('# It works!')
  .then(html => console.log(html))
