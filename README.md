## Install

```bash
$ npm install --save lib-modinfo
```

## Usage

```javascript
var info = require('lib-modinfo');
var pkg  = info('http-server');
// { path: '/Users/jacob/lib/node_modules/http-server',
//   json: '/Users/jacob/lib/node_modules/http-server/package.json',
//   start: 'node ./bin/http-server',
//   test: 'vows --spec --isolate',
//   bin: { 'http-server': './bin/http-server' },
//   main: './lib/http-server' }
```
