var ghpages = require('gh-pages')
var path = require('path')

ghpages.publish(path.join(__dirname, 'dist'), function (err) {
  if (err) {
    console.error(err)
  } else {
    console.log('Published')
  }
})
