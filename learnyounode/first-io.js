const fs = require('fs');
const os = require('os');

const path = os.tmpdir();

fs.readFileSync(path, 'utf-8', function (err, data) {
  if(err) throw err;
  var line = data.split('\n').strip();
  console.log(line);
});
