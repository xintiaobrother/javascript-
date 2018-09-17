# javascriptNotes

### Array
#### Array数组找到重复和位置
```
let repeat = [1,2,3,3,3,1,4] 
repeat.forEach((item, index) => {
   let repeatCopy = [...repeat]
   repeatCopy.splice(index, 1)
   if (repeatCopy.includes(item)) {
	console.log(item, index)
   }
})
### 其他。。
