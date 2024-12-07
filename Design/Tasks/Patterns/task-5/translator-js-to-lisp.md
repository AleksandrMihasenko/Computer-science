## Implement translator javascript code to lisp
### Example:
```
const { toLISP } = require('metalisp');
const lisp = toLISP('(x, y) => (2 + (x * 5) + (y - 2))');
console.log(lisp);
```
Output: { src: '(+ 2 (* x 5) (- y 2))', context: ['x', 'y'] }
After translation we can execute expression:

```
const { evaluate } = require('metalisp');
const context = { x: 3, y: 7 };
const result = evaluate(lisp.src, context);
console.log({ result });
```
Output: { result: 22 }

## Implement translator lisp code to javascript
### Example:
```
const { toJavaScript } = require('metalisp');
const js = toJavaScript('(+ 2 (* x 5) (- y 2))');
console.log(js);
```
Output: { src: '(x, y) => (2 + (x * 5) + (y - 2))', context: ['x', 'y'] }
After translation we can compile expression:

```
const metavm = require('metavm');
const expression = metavm.createScript('Example', js);
const result = expression(3, 7);
console.log({ result });
```
Output: { result: 22 }

## Implement more LISP operators
- [ ] Arithmetic Operations
- [ ] Comparison Operations
- [ ] Logical Operations
- [ ] Bitwise Operations

## Implement defun
Function declaration: ```(defun square (x) (* x x))```
