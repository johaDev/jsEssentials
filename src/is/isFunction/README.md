<a name="isFunction"></a>

## isFunction(value) ⇒ <code>Boolean</code>
Checks if 'value' is a function.

**Kind**: global function  
**Returns**: <code>Boolean</code> - True if 'value' is a function, else returns false.  
**Category**: Is  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
isFunction(function test() {
  return 'This is test function.';
});
// -> true

isFunction('This is a test function.');
// -> false
```
