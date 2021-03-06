<a name="zip"></a>

## zip() ⇒ <code>Array</code>
Creates an array of grouped elements, the first of which contains the first elements of the given arrays,
the second of which contains the second elements of the given arrays, and so on.

**Kind**: global function  
**Returns**: <code>Array</code> - Returns the new array of grouped elements.  
**Category**: Array  
**Throws**:

- <code>TypeError</code> If any of the arguments is not array.

**Note**: To support legacy browsers, use `Array.prototype.map` and `Array.prototype.reduce` polyfills.  

| Param | Type | Description |
| --- | --- | --- |
| [args...] | <code>Array</code> | The arrays to process. |

**Example**  
```js
zip([1, 2, 3], [11, 22, 33], [111, 222, 333]);
// -> [ [1, 11, 111], [2, 22, 222], [3, 33, 333] ]

zip([1, 2, 3], [11, 22, 33], [111, 222]);
// -> [ [1, 11, 111], [2, 22, 222], [3, 33, undefined] ]

zip([1, 2, 3], [11, 22, 33], [111, 222]);
// -> [ [1, 11, 111], [2, 22, undefined], [3, undefined, undefined] ]

zip([], []);
// -> []

zip();
// -> []
```
