var path = require('path');
var fs   = require('fs');

var HOME = process.env.HOME;
var node_modules = path.join(HOME, 'lib/node_modules');

module.exports = function modinfo(modname) {
  try {
    var out      = {};
    var pkg_path = path.join(node_modules, modname);
    var pkg_json = path.join(pkg_path, 'package.json');
    var pkg      = JSON.parse(fs.readFileSync(pkg_json));

    out.path = pkg_path;
    out.json = pkg_json;

    var scripts;
    if (scripts = pkg.scripts) {
      if (scripts.start) out.start = scripts.start;
      if (scripts.test ) out.test  = scripts.test;
    }
    if (pkg.bin) {
      out.bin = pkg.bin;
    }
    if (pkg.main) {
      out.main = pkg.main;
    }
  } catch(e) {
    console.log(e)
    out = null;
  }

  return out;
};
