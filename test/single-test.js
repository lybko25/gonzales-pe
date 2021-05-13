/* Check one specific css string without creating test files.
 * Print AST and string translated from AST.
 * Just change the first line (`var css`) and run `node test/ast.js`.
 * Make sure to change `syntax` variable too, if needed.
 */
const prop = 1;
var css = "color:${prop => prop};${props=> props && 'background: white;'}";
var css1 = css.toString();
var syntax = "jss";
var gonzales = require("./../");
var ast = gonzales.parse(css, { syntax: syntax });

console.log("\n== Source string:");
console.log(css);

console.log("\n== AST:");
console.log(ast.toJson());

console.log("\n== Translated string:");
console.log(ast.toString());
