var ghpages = require('gh-pages')
var path = require('path')

ghpages.publish(__dirname, {src: 'index.html'}, function (err) {
  if (err) {
    console.error(err)
  } else {
    console.log('Published')
  }
})
