const cso = require('csso')
const fs = require('fs')
let _data = fs.readFileSync('src/flex.css')
let ast = cso.syntax.parse(_data);
let compressedAst = cso.syntax.compress(ast).ast;
let mincss = cso.syntax.generate(compressedAst);
fs.writeFileSync('build/flex.css', mincss);