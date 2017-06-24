var fs = require('fs');
var path = process.argv[2];

fs.readFileSync(path, 'utf-8', function callback(err, data) {
  if(err) throw err;
  var line = data.split('\n').strip();
  console.log(line);
});
