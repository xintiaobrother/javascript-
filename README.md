# javascriptNotes

### Array
```
var a = [1,2,3,3,3,1,4] 
a.forEach((item, index) => {
   let b = [...a]
   b.splice(index, 1)
   if (b.includes(item)) {
	console.log(item, index)
   }
})
