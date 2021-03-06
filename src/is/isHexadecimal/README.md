<a name="isHexadecimal"></a>

## isHexadecimal(value) ⇒ <code>Boolean</code>
Checks if 'value' matches a hexadecimal regular expression.

**Kind**: global function  
**Returns**: <code>Boolean</code> - True if 'value' is a hexadecimal, else false.  
**Category**: Is  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
isHexadecimal('f5f5f5');
// -> true

isHexadecimal('9c0');
// -> true

isHexadecimal(333);
// -> true

isHexadecimal('foo');
// -> false

isHexadecimal(6.6);
// -> false
```
